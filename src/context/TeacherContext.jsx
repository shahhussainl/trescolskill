import React, { createContext, useContext, useState } from "react";
import { teachers } from "../data";

const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [allTeachers, setAllTeachers] = useState(teachers);

  return (
    <TeacherContext.Provider value={{ allTeachers, setAllTeachers }}>
      {children}
    </TeacherContext.Provider>
  );
};

export const useTeacherContext = () => useContext(TeacherContext);