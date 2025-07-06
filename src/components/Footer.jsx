import React from 'react'
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <div>
         <footer className="bg-teal-900 text-white pt-16 pb-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + Tagline */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">TRESCOL</h2>
            <p className="text-lg text-white">
              Building a tech-savvy future through cybersecurity, AI & digital
              excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-lg">
              <li>
                <NavLink to="/" className="hover:text-white transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-white transition">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="hover:text-white transition">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" className="hover:text-white transition">
                  News
                </NavLink>
              </li>
              <li>
                <NavLink to="/teachers" className="hover:text-white transition">
                  Teachers
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white transition">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <i className="fas fa-map-marker-alt mr-2 text-teal-400"></i>
                Islamabad, Pakistan
              </li>
              <li>
                <i className="fas fa-envelope mr-2 text-teal-400"></i>
                info@trecsol.net
              </li>
              <li>
                <i className="fas fa-phone-alt mr-2 text-teal-400"></i>
                +923300111172
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Subscribe
            </h3>
            <p className="text-lg text-white mb-4">
              Get updates on latest courses & events.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-gray-800 text-white text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-white"
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md transition text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 mt-12 pt-6 text-center text-lg">
          <p>&copy; {new Date().getFullYear()} TRESCOL. All rights reserved.</p>
          <div className="flex justify-center gap-5 mt-4 text-teal-400">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer