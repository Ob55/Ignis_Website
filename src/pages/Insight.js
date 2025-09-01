import { useState } from "react";
import Footer from '../ components/Footer';
import { FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";


export default function Insight() {
  // Images as objects with metadata
  const images = [
    {
      src: "./images/Articles1.jpg",
      title: "Steam Cooker",
      description: "Very efficient and energy saving.",
    },
    {
      src: "/images/Articles2.jpg",
      title: "Electric Pan",
      description: "Perfect for quick meals.",
    },
    {
      src: "/images/Articles3.jpg",
      title: "Modern Oven",
      description: "Cooks evenly with smart features.",
    },
    {
      src: "/images/Articles4.jpg",
      title: "Rice Cooker",
      description: "Ideal for fluffy rice every time.",
    },
    {
      src: "/images/Articles5.jpg",
      title: "Grill",
      description: "Gives food a smoky, rich taste.",
    },
    {
      src: "/images/Articles6.jpg",
      title: "Air Fryer",
      description: "Crispy results with little to no oil.",
    },
    {
      src: "/images/Articles7.jpg",
      title: "Microwave",
      description: "Fast heating and defrosting.",
    },
    {
      src: "/images/Articles8.jpg",
      title: "Blender",
      description: "Perfect for smoothies and sauces.",
    },
    {
      src: "/images/Articles9.jpg",
      title: "Dishwasher",
      description: "Saves time and water efficiently.",
    },
  ];
  // video data
     const videos = [
    {
      id: 1,
      title: "Video 1",
      description: "This is a sample video description",
      thumbnail: "/images/video1.jpg", // put your video thumbnails in /public/images
    },
    {
      id: 2,
      title: "Video 2",
      description: "Another video description",
      thumbnail: "/images/video2.jpg",
    },
    {
      id: 3,
      title: "Video 3",
      description: "Short description here",
      thumbnail: "/images/video3.jpg",
    },
  ];
  // Profiles for the "Most Watched" section
   const profiles = [
    {
      name: "Dennis Nderitu",
      image: "/images/Demo.jpg",
      text: "Software Engineer & Tech Enthusiast",
      youtube: "https://youtube.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
    {
      name: "Sheila Kamaara",
      image: "/images/Demo.jpg",
      text: "Creative Designer & UI Specialist",
      youtube: "https://youtube.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
    {
      name: "Paul Richard ",
      image: "/images/Demo.jpg",
      text: "Fullstack Developer & Mentor",
      youtube: "https://youtube.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  ];

  
   

  const [page, setPage] = useState(0);
  const perPage = 3; 

  const start = page * perPage;
  const end = start + perPage;
  const currentImages = images.slice(start, end);

  const totalPages = Math.ceil(images.length / perPage);
  const [activeTab, setActiveTab] = useState("articles");



  return (
    <div>
      {/* First Section */}
      <section className="relative py-16 px-6 bg-green-400 overflow-hidden">
        {/* Decorative blobs - green */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        {/* Decorative blobs - orange */}
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-orange-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-left">
          Featured This{" "}
          <span className="relative inline-block text-orange-500">
            Week
            {/* Image directly below "Week" */}
            <img
              src="/images/design.png"
              alt="Featured Week"
              className="block w-full max-w-[100px] mt-2"
            />
          </span>
        </h2>
          {/* Grid with 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Item 1 */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow">
                EPCs
              </div>
              <img
                src="/images/insightHome1.jpg"
                alt="Industrial Cooker"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Industrial Cooker
                </h3>
                <p className="text-gray-600 text-base mt-3">
                  High-efficiency cookers for industrial kitchens.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow">
                Induction Cookers
              </div>
              <img
                src="/images/insightHome2.jpg"
                alt="Steam Cooker"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Steam Cooker
                </h3>
                <p className="text-gray-600 text-base mt-3">
                  Designed for sustainable steaming solutions.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow">
                Steam Cooking
              </div>
              <img
                src="/images/insightHome3.jpg"
                alt="Eco Kitchen System"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Eco Kitchen System
                </h3>
                <p className="text-gray-600 text-base mt-3">
                  Tailored eco-friendly kitchen solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
       <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-6 mb-8 border-b border-gray-300">
  <button
    onClick={() => setActiveTab("articles")}
    className={`pb-2 font-semibold ${
      activeTab === "articles"
        ? "text-green-600 border-b-2 border-green-600"
        : "text-gray-600 hover:text-green-600"
    }`}
  >
    Articles
  </button>
  <button
    onClick={() => setActiveTab("videos")}
    className={`pb-2 font-semibold ${
      activeTab === "videos"
        ? "text-green-600 border-b-2 border-green-600"
        : "text-gray-600 hover:text-green-600"
    }`}
  >
    Videos
  </button>
</div>


        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* LEFT COLUMN */}
          <div className="col-span-1 space-y-6">
            {activeTab === "articles" ? (
              <>
                {/* Main Article */}
                <div className="cursor-pointer">
                  <img
                    src={currentImages[0].src}
                    alt={currentImages[0].title}
                    className="rounded-xl shadow-lg hover:opacity-90 transition"
                  />
                  <h3 className="mt-2 font-bold text-lg">{currentImages[0].title}</h3>
                  <p className="text-gray-600 text-sm">{currentImages[0].description}</p>
                </div>

                {/* Other Small Articles */}
                <div className="space-y-4">
                  {currentImages.slice(1).map((item, i) => (
                    <div key={i} className="flex gap-3 cursor-pointer">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-40 h-28 object-cover rounded-lg shadow-md hover:opacity-90 transition"
                      />
                      <div className="flex flex-col">
                        <p className="text-base text-gray-800 font-medium">{item.title}</p>
                        <span className="text-gray-500 text-sm">{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Main Video */}
                <div className="cursor-pointer">
                  <img
                    src={videos[0].thumbnail}
                    alt={videos[0].title}
                    className="rounded-xl shadow-lg hover:opacity-90 transition"
                  />
                  <h3 className="mt-2 font-bold text-lg">{videos[0].title}</h3>
                  <p className="text-gray-600 text-sm">{videos[0].description}</p>
                </div>

                {/* Other Videos */}
                <div className="space-y-4">
                  {videos.slice(1).map((vid, i) => (
                    <div key={i} className="flex gap-3 cursor-pointer">
                      <img
                        src={vid.thumbnail}
                        alt={vid.title}
                        className="w-40 h-28 object-cover rounded-lg shadow-md hover:opacity-90 transition"
                      />
                      <div className="flex flex-col">
                        <p className="text-base text-gray-800 font-medium">{vid.title}</p>
                        <span className="text-gray-500 text-sm">{vid.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* MIDDLE COLUMN */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              {activeTab === "articles" ? "Article Title Goes Here" : "Video Title Goes Here"}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {activeTab === "articles"
                ? "This is where the article description or main body text will appear."
                : "This is where video details or description will appear."}
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-1 space-y-8">
            {/* Profiles */}
            <div>
              <h3 className="font-bold text-lg mb-3">Most Watched</h3>
              <div className="space-y-5">
                {profiles.map((person, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{person.name}</p>
                      <p className="text-gray-600 text-sm">{person.text}</p>
                      <div className="flex gap-3 mt-2 text-gray-500 text-lg">
                        <a href={person.youtube} target="_blank" rel="noreferrer">
                          <FaYoutube className="hover:text-red-500" />
                        </a>
                        <a href={person.twitter} target="_blank" rel="noreferrer">
                          <FaTwitter className="hover:text-blue-400" />
                        </a>
                        <a href={person.linkedin} target="_blank" rel="noreferrer">
                          <FaLinkedin className="hover:text-blue-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-bold text-lg mb-3">Categories</h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-sm">
                  <span>Industrial Cookers</span>
                  <span className="text-gray-500">12</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>Steam Cookers</span>
                  <span className="text-gray-500">8</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>Home Cookers</span>
                  <span className="text-gray-500">5</span>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-bold text-lg mb-3">Search with Tags</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="px-3 py-2 bg-white border rounded-lg text-sm text-gray-700 hover:bg-orange-100 focus:bg-orange-500 focus:text-white transition">
                  Industrial Cookers
                </button>
                <button className="px-3 py-2 bg-white border rounded-lg text-sm text-gray-700 hover:bg-orange-100 focus:bg-orange-500 focus:text-white transition">
                  Steam Cookers
                </button>
                <button className="px-3 py-2 bg-white border rounded-lg text-sm text-gray-700 hover:bg-orange-100 focus:bg-orange-500 focus:text-white transition">
                  Home Cookers
                </button>
                <button className="px-3 py-2 bg-white border rounded-lg text-sm text-gray-700 hover:bg-orange-100 focus:bg-orange-500 focus:text-white transition">
                  Outdoor Cookers
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-3">
          <button
            className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100 disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border rounded-lg text-sm ${
                i === page ? "bg-green-600 text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setPage(i)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100 disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
    </section>
    
          <Footer />

    </div>

  
  );
}
