// src/context/TeacherContext.jsx
import React, { createContext, useContext, useState } from "react";

const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [allTeachers, setAllTeachers] = useState([]);

  return (
    <TeacherContext.Provider value={{ allTeachers, setAllTeachers }}>
      {children}
    </TeacherContext.Provider>
  );
};

export const useTeacherContext = () => useContext(TeacherContext);
