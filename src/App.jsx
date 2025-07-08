import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import News from "./pages/News";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import UploadSlip from "./pages/UploadSlip";
import { useTheme } from "./context/ThemeContext";


function App() {
   const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "dark" : ""}>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/news" element={<News />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/upload-slip" element={<UploadSlip />} />

      </Routes>
    </div>
    </div>
  );
}

export default App;
