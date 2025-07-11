import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CourseProvider } from "./context/CourseContext";
import { NewsProvider } from "./context/NewsContext";
import { TeacherProvider } from "./context/TeacherContext";
import { AboutProvider } from "./context/AboutContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AboutProvider>
        <CourseProvider>
          <NewsProvider>
            <TeacherProvider>
              <App />
            </TeacherProvider>
          </NewsProvider>
        </CourseProvider>
      </AboutProvider>
    </BrowserRouter>
  </React.StrictMode>
);
