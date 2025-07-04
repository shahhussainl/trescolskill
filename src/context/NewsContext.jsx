import React, { createContext, useContext, useState } from "react";
import { newsList } from "../data";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [allNews, setAllNews] = useState(newsList);

  return (
    <NewsContext.Provider value={{ selectedNews, setSelectedNews, allNews, setAllNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => useContext(NewsContext);