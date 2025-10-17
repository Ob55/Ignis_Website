import { useState } from "react";
// import Footer from '../components/Footer';
import { FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"


export default function Insight() {

  // Animation variants for list items


    // Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};
 // Container variant for staggering
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

  // Images as objects with metadata
  const images = [
    {
      src: `${process.env.PUBLIC_URL}/images/Articles1.jpg`,
      title: "Steam Cooker",
      description: "Very efficient and energy saving.",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Articles2.jpg`,
      title: "Electric Pan",
      description: "Perfect for quick meals.",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Articles3.jpg`,
      title: "Modern Oven",
      description: "Cooks evenly with smart features.",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Articles4.jpg`,
      title: "Rice Cooker",
      description: "Ideal for fluffy rice every time.",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Articles5.jpg`,
      title: "Grill",
      description: "Gives food a smoky, rich taste.",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Articles6.jpg`,
      title: "Air Fryer",
      description: "Crispy results with little to no oil.",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Articles7.jpg`,
      title: "Microwave",
      description: "Fast heating and defrosting.",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Articles8.jpg`,
      title: "Blender",
      description: "Perfect for smoothies and sauces.",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Articles9.jpg`,
      title: "Dishwasher",
      description: "Saves time and water efficiently.",
    },
  ];
  // video data
  const videos = [
  {
    id: 1,
    title: "Industrial Cooker 1",
    description: "This is a sample video description",
    thumbnail: `${process.env.PUBLIC_URL}/images/video1-thumb.jpg`,
    src: `${process.env.PUBLIC_URL}/images/insightVideo.mp4`,        
  },
  {
    id: 2,
    title: "Video 2",
    description: "Another video description",
    thumbnail: `${process.env.PUBLIC_URL}/images/video2-thumb.jpg`,
    src: `${process.env.PUBLIC_URL}/images/video2.mp4`,
  },
  {
    id: 3,
    title: "Video 3",
    description: "Short description here",
    thumbnail: `${process.env.PUBLIC_URL}/images/video3.jpg`,
    src: `${process.env.PUBLIC_URL}/images/video3.mp4`,
  },
];


  // Profiles for the "Most Watched" section
   const profiles = [
    {
      name: "Dennis Nderitu",
      image: `${process.env.PUBLIC_URL}/images/Demo.jpg`,
      text: "Software Engineer & Tech Enthusiast",
      youtube: "https://youtube.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
    {
      name: "Sheila Kamaara",
      image: `${process.env.PUBLIC_URL}/images/Demo.jpg`,
      text: "Creative Designer & UI Specialist",
      youtube: "https://youtube.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
    {
      name: "Paul Richard ",
      image: `${process.env.PUBLIC_URL}/images/Demo.jpg`,
      text: "Fullstack Developer & Mentor",
      youtube: "https://youtube.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  ];

  
   

  const [page, ] = useState(0);
  const perPage = 3; 

  const start = page * perPage;
  const end = start + perPage;
  const currentImages = images.slice(start, end);

  // const totalPages = Math.ceil(images.length / perPage);
  const [activeTab, setActiveTab] = useState("articles");
  const [selectedContent, setSelectedContent] = useState(null);




  return (
    <div>
      {/* First Section */}
      <section className="relative py-16 px-6 overflow-hidden">
      {/* Orange Background (left side) */}
      <div
        className="absolute inset-0 bg-orange-500"
        style={{
          clipPath: "polygon(0 0, 70% 0, 70% 100%, 0% 100%)",
        }}
      ></div>

      {/* Green Background (right side, slanted) */}
      <div
        className="absolute inset-0 bg-green-900"
        style={{
          clipPath:
            window.innerWidth >= 768
              ? "polygon(55% 0, 100% 0, 100% 100%, 48% 100%)"
              : "polygon(60% 0, 100% 0, 100% 100%, 48% 100%)",
        }}
      ></div>

      {/* Decorative blobs */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-1/4 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-orange-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div> */}

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold text-gray-200 mb-12 text-left"
        >
          Featured This{" "}
          <span className="relative inline-block text-green-800">
            Week
            <img
              src={`${process.env.PUBLIC_URL}/images/design.png`}
              alt="Featured Week"
              className="block w-full max-w-[100px] mt-2"
            />
          </span>
        </motion.h2>

        {/* Grid with 3 items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Item 1 */}
          <motion.div
            variants={cardVariants}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow">
              EPCs
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/insightHome1.jpg`}
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
          </motion.div>

          {/* Item 2 */}
          <motion.div
            variants={cardVariants}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow">
              Induction Cookers
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/insightHome2.jpg`}
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
          </motion.div>

          {/* Item 3 */}
          <motion.div
            variants={cardVariants}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow">
              Steam Cooking
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/insightHome3.jpg`}
              alt="Eco Kitchen System"
              className="w-full h-72 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Eco Kitchen System
              </h3>
              <p className="text-gray-600 text-base mt-3">
                Tailored eco-friendly kitchen solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>


  {/* Second Section */}
<section className="bg-gray-50 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Tabs */}
    <div className="flex justify-center mb-12">
      <div className="flex gap-12 border-b border-gray-200 relative">
        {["articles", "videos"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-lg font-semibold relative transition ${
              activeTab === tab
                ? "text-green-700"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <span className="absolute left-0 -bottom-[2px] w-full h-[3px] bg-green-600 rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* LEFT: FEATURED + GRID */}
      <div className="lg:col-span-2 space-y-10">
        {/* Featured Content */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white group relative">
          {selectedContent?.type === "video" ? (
            <video
              src={selectedContent.src}
              controls
              autoPlay
              className="w-full h-96 object-cover"
            />
          ) : (
            <img
              src={selectedContent?.src || currentImages[0].src}
              alt={selectedContent?.title || currentImages[0].title}
              className="w-full h-96 object-cover group-hover:scale-105 transition"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h2 className="text-white text-3xl font-bold">
              {selectedContent?.title || currentImages[0].title}
            </h2>
            <p className="text-gray-200 mt-2">
              {selectedContent?.description || currentImages[0].description}
            </p>
          </div>
        </div>

        {/* Grid of Items */}
        <div className="grid sm:grid-cols-2 gap-6">
          {(activeTab === "articles" ? currentImages : videos).map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden cursor-pointer group transition"
              onClick={() =>
                setSelectedContent({
                  ...item,
                  type: activeTab === "articles" ? "article" : "video",
                })
              }
            >
              <div className="overflow-hidden">
                <img
                  src={item.thumbnail || item.src}
                  alt={item.title}
                  className="w-full h-44 object-cover group-hover:scale-110 transition"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: SIDEBAR */}
      <div className="space-y-8">
  {/* Most Watched */}
  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="font-bold text-xl mb-6 text-gray-800">Most Watched</h3>
    <div className="space-y-5">
      {profiles.map((person, i) => (
        <div
          key={i}
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition"
        >
          {/* Profile Image */}
          <img
            src={person.image}
            alt={person.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          {/* Profile Details */}
          <div>
            <p className="font-semibold text-gray-800">{person.name}</p>
            <p className="text-gray-600 text-sm">{person.text}</p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2 text-gray-500">
              <a href={person.youtube || "#"} target="_blank" rel="noreferrer">
                <FaYoutube className="w-5 h-5 hover:text-red-600 transition" />
              </a>
              <a href={person.twitter || "#"} target="_blank" rel="noreferrer">
                <FaTwitter className="w-5 h-5 hover:text-blue-500 transition" />
              </a>
              <a href={person.linkedin || "#"} target="_blank" rel="noreferrer">
                <FaLinkedin className="w-5 h-5 hover:text-blue-700 transition" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Categories */}
  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="font-bold text-xl mb-6 text-gray-800">Categories</h3>
    <div className="flex flex-wrap gap-3">
      {["Industrial", "Steam", "Home", "Outdoor"].map((cat, i) => (
        <span
          key={i}
          className="px-4 py-2 bg-green-50 text-green-700 text-sm font-medium rounded-full hover:bg-green-100 cursor-pointer"
        >
          {cat}
        </span>
      ))}
    </div>
  </div>

  {/* Tags */}
  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="font-bold text-xl mb-6 text-gray-800">Tags</h3>
    <div className="flex flex-wrap gap-2">
      {["Cookers", "Energy Saving", "Industrial", "Kitchen"].map((tag, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg hover:bg-green-100 cursor-pointer"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>
    </div>
  </div>
</section>


          {/* <Footer /> */}

    </div>

  
  );
}

// <section className="bg-gray-50 py-16 px-6">
//   <div className="max-w-7xl mx-auto">
//     {/* ----------------- TABS (Articles / Videos) ----------------- */}
//     <motion.div
//       className="flex gap-8 mb-10 border-b border-gray-300"
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       variants={fadeInVariants}
//     >
//       {/* Articles Tab */}
//       <button
//         onClick={() => setActiveTab("articles")}
//         className={`pb-3 text-lg font-semibold transition ${
//           activeTab === "articles"
//             ? "text-green-600 border-b-2 border-green-600"
//             : "text-gray-600 hover:text-green-600"
//         }`}
//       >
//         Articles
//       </button>

//       {/* Videos Tab */}
//       <button
//         onClick={() => setActiveTab("videos")}
//         className={`pb-3 text-lg font-semibold transition ${
//           activeTab === "videos"
//             ? "text-green-600 border-b-2 border-green-600"
//             : "text-gray-600 hover:text-green-600"
//         }`}
//       >
//         Videos
//       </button>
//     </motion.div>

//     {/* ----------------- CONTENT GRID ----------------- */}
//     <motion.div
//       className="grid grid-cols-1 md:grid-cols-4 gap-10"
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={containerVariants}
//     >
//       {/* -------- LEFT COLUMN (Articles / Videos List) -------- */}
//       <motion.div className="col-span-1 space-y-6" variants={itemVariants}>
//         {activeTab === "articles" ? (
//           <>
//             {/* Main Featured Article */}
//             <motion.div
//               className="cursor-pointer group"
//               variants={itemVariants}
//               onClick={() =>
//                 setSelectedContent({ ...currentImages[0], type: "article" })
//               }
//             >
//               <img
//                 src={currentImages[0].src}
//                 alt={currentImages[0].title}
//                 className="rounded-xl shadow-md group-hover:opacity-90 transition"
//               />
//               <h3 className="mt-3 font-bold text-lg text-gray-800">
//                 {currentImages[0].title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-snug">
//                 {currentImages[0].description}
//               </p>
//             </motion.div>

//             {/* Other Small Articles */}
//             <motion.div className="space-y-4" variants={containerVariants}>
//               {currentImages.slice(1).map((item, i) => (
//                 <motion.div
//                   key={i}
//                   className="flex gap-3 cursor-pointer group"
//                   variants={itemVariants}
//                   onClick={() => setSelectedContent({ ...item, type: "article" })}
//                 >
//                   <img
//                     src={item.src}
//                     alt={item.title}
//                     className="w-32 h-24 object-cover rounded-lg shadow group-hover:opacity-90 transition"
//                   />
//                   <div>
//                     <p className="text-base text-gray-800 font-medium group-hover:text-green-600">
//                       {item.title}
//                     </p>
//                     <span className="text-gray-500 text-sm">
//                       {item.description}
//                     </span>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </>
//         ) : (
//           <>
//             {/* Main Featured Video */}
//             <motion.div
//               className="cursor-pointer group"
//               variants={itemVariants}
//               onClick={() =>
//                 setSelectedContent({ ...videos[0], type: "video" })
//               }
//             >
//               <img
//                 src={videos[0].thumbnail}
//                 alt={videos[0].title}
//                 className="rounded-xl shadow-md group-hover:opacity-90 transition"
//               />
//               <h3 className="mt-3 font-bold text-lg text-gray-800">
//                 {videos[0].title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-snug">
//                 {videos[0].description}
//               </p>
//             </motion.div>

//             {/* Other Small Videos */}
//             <motion.div className="space-y-4" variants={containerVariants}>
//               {videos.slice(1).map((vid, i) => (
//                 <motion.div
//                   key={i}
//                   className="flex gap-3 cursor-pointer group"
//                   variants={itemVariants}
//                   onClick={() => setSelectedContent({ ...vid, type: "video" })}
//                 >
//                   <img
//                     src={vid.thumbnail}
//                     alt={vid.title}
//                     className="w-32 h-24 object-cover rounded-lg shadow group-hover:opacity-90 transition"
//                   />
//                   <div>
//                     <p className="text-base text-gray-800 font-medium group-hover:text-green-600">
//                       {vid.title}
//                     </p>
//                     <span className="text-gray-500 text-sm">
//                       {vid.description}
//                     </span>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </>
//         )}
//       </motion.div>

//       {/* -------- MIDDLE COLUMN (Selected Content Display) -------- */}
//       <motion.div className="col-span-2" variants={itemVariants}>
//         <h2 className="text-3xl font-bold mb-5 text-gray-800">
//           {activeTab === "articles"
//             ? "Article Title Goes Here"
//             : "Video Title Goes Here"}
//         </h2>
//         <p className="text-gray-700 leading-relaxed text-lg">
//           {activeTab === "articles"
//             ? "This is where the article description or main body text will appear. Keep it clean and readable."
//             : "This is where video details or description will appear. You can expand this with more info later."}
//         </p>
//       </motion.div>

//       {/* -------- RIGHT COLUMN (Sidebar: Profiles, Categories, Tags) -------- */}
//       <motion.div className="col-span-1 space-y-10" variants={itemVariants}>
//         {/* Profiles Section */}
//         <motion.div variants={itemVariants}>
//           <h3 className="font-bold text-lg mb-4 text-gray-800">Most Watched</h3>
//           <div className="space-y-6">
//             {profiles.map((person, i) => (
//               <motion.div
//                 key={i}
//                 className="flex gap-3 items-start group"
//                 variants={itemVariants}
//               >
//                 <img
//                   src={person.image}
//                   alt={person.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="font-semibold text-gray-800 group-hover:text-green-600">
//                     {person.name}
//                   </p>
//                   <p className="text-gray-600 text-sm">{person.text}</p>
//                   {/* Social Links */}
//                   <div className="flex gap-3 mt-2 text-gray-500 text-lg">
//                     <a
//                       href={person.youtube}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="hover:text-red-500"
//                     >
//                       <FaYoutube />
//                     </a>
//                     <a
//                       href={person.twitter}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="hover:text-blue-400"
//                     >
//                       <FaTwitter />
//                     </a>
//                     <a
//                       href={person.linkedin}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="hover:text-blue-600"
//                     >
//                       <FaLinkedin />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Categories Section */}
//         <motion.div variants={itemVariants}>
//           <h3 className="font-bold text-lg mb-4 text-gray-800">Categories</h3>
//           <ul className="space-y-3">
//             <li className="flex justify-between text-sm">
//               <span>Industrial Cookers</span>
//               <span className="text-gray-500">12</span>
//             </li>
//             <li className="flex justify-between text-sm">
//               <span>Steam Cookers</span>
//               <span className="text-gray-500">8</span>
//             </li>
//             <li className="flex justify-between text-sm">
//               <span>Home Cookers</span>
//               <span className="text-gray-500">5</span>
//             </li>
//           </ul>
//         </motion.div>

//         {/* Tags Section */}
//         <motion.div variants={itemVariants}>
//           <h3 className="font-bold text-lg mb-4 text-gray-800">
//             Search with Tags
//           </h3>
//           <div className="flex flex-wrap gap-2">
//             {[
//               "Industrial Cookers",
//               "Steam Cookers",
//               "Home Cookers",
//               "Outdoor Cookers",
//             ].map((tag, i) => (
//               <button
//                 key={i}
//                 className="px-3 py-2 bg-white border rounded-lg text-sm text-gray-700 hover:bg-green-100 focus:bg-green-600 focus:text-white transition"
//               >
//                 {tag}
//               </button>
//             ))}
//           </div>
//         </motion.div>
//       </motion.div>
//     </motion.div>

//     {/* ----------------- PAGINATION ----------------- */}
//     <motion.div
//       className="flex justify-center mt-14 space-x-3"
//       variants={fadeInVariants}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//     >
//       {/* Prev Button */}
//       <button
//         className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100 disabled:opacity-50"
//         onClick={() => setPage((p) => Math.max(p - 1, 0))}
//         disabled={page === 0}
//       >
//         Prev
//       </button>

//       {/* Page Numbers */}
//       {Array.from({ length: totalPages }).map((_, i) => (
//         <button
//           key={i}
//           className={`px-3 py-1 border rounded-lg text-sm ${
//             i === page ? "bg-green-600 text-white" : "hover:bg-gray-100"
//           }`}
//           onClick={() => setPage(i)}
//         >
//           {i + 1}
//         </button>
//       ))}

//       {/* Next Button */}
//       <button
//         className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100 disabled:opacity-50"
//         onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
//         disabled={page === totalPages - 1}
//       >
//         Next
//       </button>
//     </motion.div>

//     {/* ----------------- MODAL (Opens when item clicked) ----------------- */}
//     {selectedContent && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
//         <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative">
//           {/* Close Button */}
//           <button
//             className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
//             onClick={() => setSelectedContent(null)}
//           >
//             ✕
//           </button>

//           {/* Article Modal */}
//           {selectedContent.type === "article" && (
//             <div>
//               <img
//                 src={selectedContent.src}
//                 alt={selectedContent.title}
//                 className="rounded-xl mb-4"
//               />
//               <h2 className="text-2xl font-bold mb-2">
//                 {selectedContent.title}
//               </h2>
//               <p className="text-gray-700">{selectedContent.description}</p>
//             </div>
//           )}

//           {/* Video Modal */}
//           {selectedContent.type === "video" && (
//             <div className="w-full">
//               <video
//                 src={selectedContent.src}
//                 controls
//                 autoPlay
//                 className="w-full h-96 rounded-xl"
//               />
//               <h2 className="text-xl font-bold mt-4">{selectedContent.title}</h2>
//               <p className="text-gray-700">{selectedContent.description}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     )}
//   </div>
// </section>
