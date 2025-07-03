// src/context/NewsContext.jsx
import React, { createContext, useContext, useState } from "react";

const NewsContext = createContext();

export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const [selectedNews, setSelectedNews] = useState(null);
  return (
    <NewsContext.Provider value={{ selectedNews, setSelectedNews }}>
      {children}
    </NewsContext.Provider>
  );
};