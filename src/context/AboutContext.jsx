// src/context/AboutContext.jsx
import React, { createContext, useContext, useState } from "react";
import { people as initialPeople } from "../data";

const AboutContext = createContext();

export function AboutProvider({ children }) {
  const [people, setPeople] = useState(initialPeople);
  return (
    <AboutContext.Provider value={{ people, setPeople }}>
      {children}
    </AboutContext.Provider>
  );
}

export function useAboutContext() {
  return useContext(AboutContext);
}
