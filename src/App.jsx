import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import News from "./pages/News";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import UploadSlip from "./pages/UploadSlip";
import RegistrationForm from "./pages/RegistrationForm";
import AdminLogin from "./components/admin/AdminLogin";
import AdminPanel from "./components/admin/AdminPanel";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-gray-100">
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/news" element={<News />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/upload-slip" element={<UploadSlip />} />
        <Route path="/register" element={<RegistrationForm />} />
        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;