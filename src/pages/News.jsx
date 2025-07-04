import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNewsContext } from "../context/NewsContext";

function News() {
  const { selectedNews } = useNewsContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedNews) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, [selectedNews, navigate]);

  if (!selectedNews) return null;

  return (
    <div className="bg-gray-100 py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back to Home Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="bg-teal-500 text-gray-800 px-4 py-2 rounded hover:bg-teal-600 transition"
          >
            ← Back to Home
          </button>
        </div>

        {/* News Content */}
        <div className="grid md:grid-cols-3 gap-8 mt-10"> {/* <- ADDED SPACING */}
          {/* Main News Card */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-full h-80 object-cover rounded-lg mb-6"
            />
            <div className="text-sm text-gray-500 flex items-center mb-2 space-x-6">
              <p>🖋️ By {selectedNews.postedBy}</p>
              <p>📅 On {selectedNews.date}</p>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {selectedNews.title}
            </h1>
            <p className="text-gray-800 leading-relaxed whitespace-pre-line">
              {selectedNews.fullDescription || selectedNews.description}
            </p>
          </div>

          {/* Sidebar */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              News & Blog
            </h2>
            <div className="border p-2 rounded-md flex items-center gap-4">
              <img
                src={selectedNews.image}
                alt="Thumbnail"
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {selectedNews.title}
                </p>
                <p className="text-xs text-gray-500">{selectedNews.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;