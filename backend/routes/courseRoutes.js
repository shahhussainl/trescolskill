const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const multer = require("multer");
const {
  getCourses,
  getCourseById,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

router.put("/:id", auth, updateCourse);

// Storage for course image & trainer avatar
const courseStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      file.fieldname === "image" ? "uploads/courses" : "uploads/trainers"
    );
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: courseStorage });

// 📥 Public GET routes
router.get("/", getCourses);
router.get("/:id", getCourseById);

// 🔒 Protected POST, PUT, DELETE routes
router.post(
  "/add",
  auth,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "trainer_avatar", maxCount: 1 },
  ]),
  addCourse
);

router.put("/:id", auth, updateCourse);
router.delete("/:id", auth, deleteCourse);

module.exports = router;
