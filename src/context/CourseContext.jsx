import React, { createContext, useContext, useState } from "react";
import { courses } from "../data";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [coursesState, setCourses] = useState(courses);

  return (
    <CourseContext.Provider value={{ courses: coursesState, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => useContext(CourseContext);