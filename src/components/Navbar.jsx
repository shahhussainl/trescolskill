import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Upload } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "News", path: "/news" },
    { name: "Teachers", path: "/teachers" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="bg-teal-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold tracking-tight">Trescol</span>
            </div>
            <div className="hidden md:ml-60 md:flex md:space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-teal-800 text-white"
                        : "text-teal-100 hover:bg-teal-700 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md flex items-center transition-colors duration-200">
              <Upload className="w-5 h-5 mr-2" />
              Upload Slip
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-200 hover:text-white hover:bg-teal-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-teal-800 text-white"
                      : "text-teal-100 hover:bg-teal-700 hover:text-white"
                  }`
                }
                onClick={toggleMenu}
              >
                {item.name}
              </NavLink>
            ))}
            <button className="w-full text-left bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-md flex items-center transition-colors duration-200">
              <Upload className="w-5 h-5 mr-2" />
              Upload Slip
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;