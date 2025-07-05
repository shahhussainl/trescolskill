import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNewsContext } from "../context/NewsContext";

function News() {
  const { selectedNews, setSelectedNews, allNews } = useNewsContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReadMore = (item) => {
    setSelectedNews(item);
  };

  const handleBackClick = () => {
    setSelectedNews(null);
    navigate("/");
  };

  return (
    <div className="py-16 bg-gray-100 min-h-screen" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <button
            onClick={handleBackClick}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
          >
            ← Back to Home
          </button>
        </div>
        {selectedNews ? (
          <div className="grid md:grid-cols-3 gap-8">
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
            <div className="bg-white p-4 rounded-lg shadow-md" data-aos="fade-up">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                News & Blog
              </h2>
              {allNews.map((item) => (
                <div
                  key={item.id}
                  className="border p-2 rounded-md flex items-center gap-4 mb-2 cursor-pointer shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
                  onClick={() => handleReadMore(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md "
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              News & Updates
            </h2>
            {allNews.length === 0 ? (
              <p className="text-center text-gray-600">No news available.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allNews.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex w-full flex-col rounded-xl bg-white shadow-md"
                  >
                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg shadow-teal-500/40">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-gray-500 mb-1">📅 {item.date}</p>
                      <p className="text-xs text-gray-600 mb-2">
                        🖋️ Posted by: <span className="font-semibold">{item.postedBy}</span>
                      </p>
                      <h5 className="mb-2 text-xl font-semibold text-gray-900">
                        {item.title}
                      </h5>
                      <p className="text-sm text-gray-700">
                        {item.description.length > 80
                          ? item.description.slice(0, 80) + "..."
                          : item.description}
                      </p>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        type="button"
                        onClick={() => handleReadMore(item)}
                        className="rounded-lg bg-teal-400 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:bg-teal-600"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default News;