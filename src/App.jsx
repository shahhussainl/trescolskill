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
import RegistrationForm from "./pages/RegistrationForm";
import AdminLogin from "./components/admin/AdminLogin";
import AddCourse from "./components/admin/AddCourse";
import DeleteCourse from "./components/admin/DeleteCourse";
import EditCourse from "./components/admin/EditCourse";


function App() {
  return (
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
        <Route path="/register" element={<RegistrationForm />} />
        {/* APIs endpoints */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/add-course" element={<AddCourse />} />
        <Route path="/admin/courses" element={<DeleteCourse />} />
        <Route path="/admin/edit-course/:id" element={<EditCourse />} />
      </Routes>
    </div>
  );
}

export default App;
