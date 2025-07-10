const db = require("../models/db");
const fs = require("fs");
const path = require("path");

// ✅ GET all courses
exports.getCourses = async (req, res) => {
  try {
    const [courses] = await db.query("SELECT * FROM courses");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Failed to load courses", err });
  }
};

// ✅ GET single course by ID
exports.getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM courses WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch course", err });
  }
};

// ✅ ADD course
exports.addCourse = async (req, res) => {
  try {
    const {
      title,
      trainer_name,
      description,
      scheduleCourse,
      applyBeforeDate,
      duration,
      venue,
      fees,
    } = req.body;

    const imageFile = req.files?.image?.[0];
    const trainerAvatarFile = req.files?.trainer_avatar?.[0];

    if (!imageFile || !trainerAvatarFile) {
      return res.status(400).json({ message: "Both images are required" });
    }

    const imagePath = imageFile.path.replace(/\\/g, "/");
    const avatarPath = trainerAvatarFile.path.replace(/\\/g, "/");

    const applyBefore = new Date(applyBeforeDate);
    const schedule = new Date(scheduleCourse);

    if (applyBefore >= schedule) {
      return res.status(400).json({
        message: "Apply before date must be earlier than schedule date",
      });
    }

    const formattedSchedule = scheduleCourse.replace("T", " ") + ":00";

    await db.query(
      `INSERT INTO courses 
        (title, image, trainer_name, trainer_avatar, description, scheduleCourse, applyBeforeDate, duration, venue, fees)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        imagePath,
        trainer_name,
        avatarPath,
        description,
        formattedSchedule,
        applyBeforeDate,
        duration,
        venue,
        fees,
      ]
    );

    res.status(201).json({ message: "✅ Course added successfully" });
  } catch (err) {
    console.error("❌ Add course error:", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

// ✅ UPDATE course
exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      trainer_name,
      description,
      scheduleCourse,
      applyBeforeDate,
      duration,
      venue,
      fees,
    } = req.body;

    const formattedSchedule = scheduleCourse.replace("T", " ") + ":00";

    // Get existing course
    const [existingRows] = await db.query(
      "SELECT * FROM courses WHERE id = ?",
      [id]
    );
    if (existingRows.length === 0) {
      return res.status(404).json({ message: "Course not found" });
    }

    const existingCourse = existingRows[0];

    // Optional files
    const imageFile = req.files?.image?.[0];
    const avatarFile = req.files?.trainer_avatar?.[0];

    let imagePath = existingCourse.image;
    let avatarPath = existingCourse.trainer_avatar;

    if (imageFile) {
      if (fs.existsSync(existingCourse.image)) {
        fs.unlinkSync(existingCourse.image);
      }
      imagePath = imageFile.path.replace(/\\/g, "/");
    }

    if (avatarFile) {
      if (fs.existsSync(existingCourse.trainer_avatar)) {
        fs.unlinkSync(existingCourse.trainer_avatar);
      }
      avatarPath = avatarFile.path.replace(/\\/g, "/");
    }

    await db.query(
      `UPDATE courses SET 
        title = ?, 
        image = ?, 
        trainer_name = ?, 
        trainer_avatar = ?, 
        description = ?, 
        scheduleCourse = ?, 
        applyBeforeDate = ?, 
        duration = ?, 
        venue = ?, 
        fees = ?
       WHERE id = ?`,
      [
        title,
        imagePath,
        trainer_name,
        avatarPath,
        description,
        formattedSchedule,
        applyBeforeDate,
        duration,
        venue,
        fees,
        id,
      ]
    );

    res.json({ message: "✅ Course updated successfully" });
  } catch (err) {
    console.error("❌ Update error:", err);
    res
      .status(500)
      .json({ message: "Failed to update course", error: err.message });
  }
};

// ✅ DELETE course
exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    // Get image paths before deleting course
    const [rows] = await db.query(
      "SELECT image, trainer_avatar FROM courses WHERE id = ?",
      [id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "Course not found" });
    }

    const { image, trainer_avatar } = rows[0];

    // Delete course from DB
    const [result] = await db.query("DELETE FROM courses WHERE id = ?", [id]);

    // Delete images from file system
    if (fs.existsSync(image)) fs.unlinkSync(image);
    if (fs.existsSync(trainer_avatar)) fs.unlinkSync(trainer_avatar);

    res.json({ message: "✅ Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "❌ Failed to delete course", err });
  }
};
