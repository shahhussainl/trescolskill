import React, { createContext, useContext, useState } from "react";

// Create context
const CourseContext = createContext();

// Provider component
export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]); // shared courses state

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

// Custom hook for consuming context
export const useCourseContext = () => useContext(CourseContext);
