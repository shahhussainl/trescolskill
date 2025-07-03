import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { CourseProvider } from "./context/CourseContext";
import { NewsProvider } from "./context/NewsContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CourseProvider>
      <NewsProvider>
        <App />
        </NewsProvider>
      </CourseProvider>
    </BrowserRouter>
  </React.StrictMode>

);