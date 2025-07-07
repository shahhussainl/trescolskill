import React, { useEffect, useState } from "react";
import { useNewsContext } from "../context/NewsContext";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollBtn from "../components/ScrollBtn";
import Footer from "../components/Footer";

function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredNews, setFilteredNews] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [tags, setTags] = useState([]);

  const { selectedNews, setSelectedNews, allNews } = useNewsContext();


  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);

    setFilteredNews(allNews);
    setRecentPosts(allNews.slice(0, 3));

    const allTags = new Set();
    allNews.forEach((item) => {
      if (item.tags) item.tags.forEach((tag) => allTags.add(tag));
    });
    setTags([...allTags]);
  }, [allNews]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const results = allNews.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredNews(results);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const results =
      category === "All"
        ? allNews
        : allNews.filter((item) => item.category === category);
    setFilteredNews(results);
  };

  const handleReadMore = (item) => {
    setSelectedNews(item);
  };


  const categories = [
    "All",
    "Cybersecurity",
    "AI",
    "Industry News",
    "TRESCOL Updates",
  ];

  return (
    <>
      <div className="py-16 bg-gray-100 min-h-screen" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <p>📌 {selectedNews.category}</p>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  {selectedNews.title}
                </h1>
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {selectedNews.fullDescription || selectedNews.description}
                </p>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          selectedNews.title
                        )}&url=${encodeURIComponent(window.location.href)}`,
                        "_blank"
                      )
                    }
                    className="text-white bg-teal-500 px-4 py-2 rounded hover:bg-teal-600"
                  >
                    Share on Twitter
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`,
                        "_blank"
                      )
                    }
                    className="text-white bg-teal-500 px-4 py-2 rounded hover:bg-teal-600"
                  >
                    Share on Facebook
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Recent Posts
                </h2>
                {recentPosts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleReadMore(item)}
                    className="border p-2 rounded-md mb-2 cursor-pointer shadow-md hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        className="w-16 h-16 object-cover rounded-md"
                        alt={item.title}
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-6">
                  <h3 className="font-bold text-gray-700 mb-2">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-teal-200 text-teal-700 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold text-gray-700 mb-2">Subscribe</h3>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <button className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Insights | Stay Updated with Cybersecurity, AI & Emerging Tech
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Dive into the world of digital defense, artificial
                  intelligence, and future tech. Curated by experts, crafted for
                  the curious.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-3/4">
                  <div className="mb-6 flex gap-4 flex-wrap">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 rounded-full border transition text-sm ${
                          selectedCategory === category
                            ? "bg-teal-500 text-white"
                            : "bg-white text-gray-700 border-gray-300"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full p-3 mb-6 border rounded"
                  />

                  {filteredNews.length === 0 ? (
                    <p className="text-center text-gray-600">No news found.</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredNews.map((item) => (
                        <div
                          key={item.id}
                          className="relative mt-10 flex w-full flex-col rounded-xl bg-white shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
                        >
                          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-teal-500 to-teal-600">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          <div className="p-6">
                            <p className="text-xs text-gray-500 mb-1">
                              📅 {item.date}
                            </p>
                            <p className="text-xs text-gray-600 mb-2">
                              🖋️ Posted by: {item.postedBy}
                            </p>
                            <p className="text-xs text-blue-600 mb-2">
                              📌 {item.category}
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
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
      <ScrollBtn />
    </>
  );
}

export default News;
