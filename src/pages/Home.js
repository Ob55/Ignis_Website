// import Footer from '../components/Footer';
import React, { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom"
import { motion , AnimatePresence } from "framer-motion";




export default function Home() {
  const [, setImageIndex] = useState(0);
    const images = [
     
    ];

   // Variants for partners section
 const partnersContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};
 /// Variants for each partner logo
const partnerItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


  // For "What we offer" section (right side nav images)
const [selectedOffer, setSelectedOffer] = useState("Institutional Steam Kitchens");

   // Variants for the whole list container
const listVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.25, delayChildren: 0.15 },
  },
};

// Variants for each benefit item
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.25,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.6, ease: "easeIn" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};


  const offerImages = {
  "Institutional Steam Kitchens": "/images/Institutional Steam Kitchens.jpg",
  "Household: Efficient Electric Cooking": "/images/Household: Efficient Electric Cooking.jpg",
  "Services": "/images/Services.jpg",
};
const offerTexts = {
  "Institutional Steam Kitchens": [
    "Electric or LPG steam boilers, insulated piping, steam kettles & ovens, food-grade fittings. ",
    "Full kitchen design, installation, training, and O&M. ",
    "Digital monitoring (usage, uptime, maintenance prompts). "
  ],
  "Household: Efficient Electric Cooking": [
    "Electric Pressure Cookers (EPCs) and Induction Cookers (single & double zone). ",
    "Starter bundles, user guides, and community training. ",
    "Distribution through hubs and partners; after-sales support. ."
  ],
  "Services": [
    "Site assessments & kitchen retrofit designs..",
    "Financing support (bank partners + carbon incentives).",
    "Capacity-building for kitchen staff & administrators."
  ]
};

  const benefits = [
  "High Throughput: Cook for thousands efficiently with consistent quality.",
  "Energy Flexible: Works with electricity or gas/biogas—adapts easily to changing tariffs.",
  "Digitally Managed: Sensors and dashboards track efficiency, maintenance, and accountability.",
  "Lower Lifecycle Cost: Higher upfront cost, but reduces fuel, staff hours, and food wastage over time.",
];

const testimonials = [
  "Ignis Innovation transformed our institutional kitchen – energy-efficient and easy to use!",
  "The staff training was excellent, and the digital monitoring makes our operations seamless.",
  "Cleaner cooking and safer working conditions – highly recommend their steam solutions.",
  "We reduced energy costs significantly with their appliances and support services.",
];
 const [current, setCurrent] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, 5000);

  return () => clearInterval(interval);
}, [testimonials.length]); // ✅ added dependency


  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

    const benefitImages = {
    "High Throughput: Cook for thousands efficiently with consistent quality.": {
      left: "/images/left1.png",
      right: "/images/right1.jpg",
    },
    "Energy Flexible: Works with electricity or gas/biogas—adapts easily to changing tariffs.": {
      left: "/images/left2.jpg",
      right: "/images/right2.jpg",
    },
    "Digitally Managed: Sensors and dashboards track efficiency, maintenance, and accountability.": {
      left: "/images/right1.jpg",
      right: "/images/left2.jpg",
    },
    "Lower Lifecycle Cost: Higher upfront cost, but reduces fuel, staff hours, and food wastage over time.": {
      left: "/images/left1.png",
      right: "/images/right2.jpg",
    },
    "Safer Kitchens: No open flames; cleaner air; improved working conditions for staff.": {
      left: "/images/left2.jpg",
      right: "/images/right1.jpg",
    },
  };

   const [selectedBenefit, setSelectedBenefit] = useState(benefits[0]);




  useEffect(() => {
  const interval = setInterval(() => {
    setImageIndex((prev) => (prev + 1) % images.length);
  }, 10000);

  return () => clearInterval(interval);
}, [images.length]); 


  const navigate = useNavigate();


  return (
    <div>
      {/* Hero Section */}
    {/* <section className="relative bg-green-900 text-white m-0 p-0 overflow-hidden">
  <div className="flex flex-col md:flex-row items-center h-full">
    <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left px-6 md:px-12 py-16 md:py-24">
      <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6">
        Clean, modern kitchens for Africa’s institutions and homes{" "}
        <span className="font-bold text-orange-500">Ignis Innovation</span>
      </h1>
      <p className="text-lg md:text-xl mb-8 text-green-100">
        Designs and deploys steam-based institutional kitchens and efficient
        electric appliances for households—backed by digital monitoring,
        training, and after-sales service.
      </p>
      <div className="flex justify-center md:justify-start gap-4">
        <button
          className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition"
          onClick={() => navigate("/contact")}
        >
          Talk To Our Team
        </button>
        <button
          className="bg-yellow-200 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
          onClick={() => navigate("/product")}
        >
          Shop Household Appliances
        </button>
      </div>
    </div>

    <div className="md:w-1/2 w-full h-[300px] md:h-[600px] relative">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Industrial Kitchen"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === imageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            clipPath:
              window.innerWidth >= 768
                ? "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
                : "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
      ))}
    </div>
  </div>
</section> */}
<section className="relative bg-green-900 text-white m-0 p-0 overflow-hidden min-h-screen">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/images/homePageVideo1.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative flex flex-col md:flex-row items-center h-full">
    {/* Left side text */}
    <div
      className="md:w-1/2 flex flex-col justify-center text-center md:text-left 
                 px-6 md:px-16 py-20 md:py-40 relative z-10 mt-12 md:mt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight"
      >
        Clean, modern kitchens for Africa’s institutions and homes{" "}
        <span className="font-bold text-orange-500">Ignis Innovation</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-2xl mb-10 text-green-100 max-w-2xl"
      >
        Designs and deploys steam-based institutional kitchens and efficient
        electric appliances for households—backed by digital monitoring,
        training, and after-sales service.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="flex justify-center md:justify-start gap-6"
      >
        <button
          className="bg-green-800 text-white px-8 py-4 rounded-lg text-lg hover:bg-green-900 transition"
          onClick={() => navigate("/contact")}
        >
          Talk To Our Team
        </button>
        <button
          className="bg-yellow-200 text-black px-8 py-4 rounded-lg text-lg hover:bg-yellow-300 transition"
          onClick={() => navigate("/product")}
        >
          Shop Household Appliances
        </button>
      </motion.div>
    </div>

    {/* Right side filler */}
    <div className="md:w-1/2 w-full h-[350px] md:h-[700px]"></div>
  </div>
</section>


      {/* Our Metrics Section */}
  <section className="relative py-12 bg-gradient-to-r from-green-50 via-white to-green-50 overflow-hidden">
  {/* Floating abstract blobs */}
  <div className="absolute top-0 left-1/4 w-80 h-80 bg-green-200 rounded-full opacity-30 animate-pulse-slow -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-green-100 rounded-full opacity-25 animate-pulse-slow translate-x-1/2 translate-y-1/2"></div>
  <div className="absolute top-1/3 right-1/2 w-64 h-64 bg-green-300 rounded-full opacity-20 animate-pulse-slow"></div>

  <div className="container mx-auto text-center px-6 md:px-12 mb-8 relative z-10">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 inline-block relative">
      Our{" "}
      <span className="relative inline-block text-green-500">
        Metrics
        {/* Image directly below Metrics only */}
        <img
          src="/images/design.png"
          alt="Design"
          className="block mx-auto w-full max-w-[120px] mt-2"
        />
      </span>
    </h2>
  </div>

  {/* Image with overlay text */}
  <div className="w-full flex justify-center px-6 md:px-12 relative z-10">
    <div className="relative w-full max-w-3xl">
      <img
        src="/images/map.png"
        alt="Map"
        className="w-full h-auto object-contain rounded-xl shadow-lg"
      />

      {/* Left text (Tanzania) */}
      <motion.div
        className="absolute top-2/3 left-4 bg-white rounded-xl shadow-md p-4 text-gray-800 text-sm md:text-base font-semibold max-w-[220px] md:max-w-[260px] leading-snug"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Tanzania scale goal (by 2028): <br />
        3,000 institutional systems & <br />
        2,000,000 household units.
      </motion.div>

      {/* Right text (Kenya) */}
      <motion.div
        className="absolute top-1/3 right-4 bg-white rounded-xl shadow-md p-4 text-gray-800 text-sm md:text-base font-semibold max-w-[220px] md:max-w-[260px] leading-snug text-right"
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Kenya scale goal (by 2027): <br />
        6,000 institutional systems & <br />
        500,000 household units.
      </motion.div>
    </div>
  </div>
</section>

      {/* What We Offer Section */}
     <section className="offer-section relative bg-gradient-to-r from-green-50 via-white to-green-50 py-20 overflow-hidden">
  {/* Floating abstract blobs */}
  <div className="absolute top-0 left-1/4 w-80 h-80 bg-green-200 rounded-full opacity-30 animate-pulse-slow -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-green-100 rounded-full opacity-25 animate-pulse-slow translate-x-1/2 translate-y-1/2"></div>
  <div className="absolute top-1/3 right-1/2 w-64 h-64 bg-green-300 rounded-full opacity-20 animate-pulse-slow"></div>

  <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-6 relative z-10">
    {/* Left side - Heading + Boxes */}
    <div className="text-left mb-6 md:mb-0 md:w-1/2">
      <h2 className="text-3xl font-bold text-gray-800">
  What{" "}
  <span className="relative inline-block text-green-500">
    We Offer
    {/* Image directly below "we offer" */}
    <img
      src="/images/design.png"
      alt="Design"
      className="block mx-auto w-full max-w-[110px] mt-2"
    />
  </span>
</h2>
        <AnimatePresence mode="wait">
  <motion.div
    key={selectedOffer} // changes when user clicks Services/Household/etc.
    className="flex flex-col gap-6 mt-12"
    variants={containerVariants}
    initial="hidden"
    animate="show"
    exit="exit"
    whileInView="show" // 👈 will trigger on scroll too
    viewport={{ once: false, amount: 0.3 }}
  >
    {offerTexts[selectedOffer]?.map((text, idx) => (
      <motion.div
        key={idx}
        variants={itemVariants}
        className="flex items-center bg-white shadow-lg rounded-xl px-6 py-6 text-gray-800 text-lg font-semibold w-full max-w-[700px] min-h-[70px]"
      >
        <CheckCircleIcon className="h-7 w-7 text-green-500 mr-4" />
        {text}
      </motion.div>
    ))}
  </motion.div>
</AnimatePresence>


    </div>

    {/* Right side - Nav + Image */}
    <div className="md:w-1/2 flex flex-col gap-6 text-gray-700 text-lg font-medium">
      <div className="flex flex-wrap gap-6">
        {Object.keys(offerImages).map((offer) => (
          <span
            key={offer}
            className={`cursor-pointer transition ${
              selectedOffer === offer ? "text-green-500 font-semibold" : "hover:text-green-500"
            }`}
            onClick={() => setSelectedOffer(offer)}
          >
            {offer}
          </span>
        ))}
      </div>

      {/* Image for selected offer */}
      <div className="mt-6 flex justify-center">
        <img
          src={offerImages[selectedOffer]}
          alt={selectedOffer}
          className="w-[700px] h-[400px] object-cover rounded-2xl shadow-xl transition duration-500 transform hover:scale-105"
        />
      </div>
    </div>
  </div>
</section>


      {/* Why Steam Cooking Section */}
    <section className="overflow-x-hidden bg-gradient-to-r from-green-50 via-green-100 to-green-50 py-16">
      <div className="container mx-auto text-center px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
        Why{" "}
        <span className="relative inline-block text-green-500">
          Steam
          {/* Image directly below "Steam" */}
          <img
            src="/images/design.png"
            alt="Design"
            className="block mx-auto w-full max-w-[100px] mt-2"
          />
          </span>{" "}
          Cooking?
        </h2>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-full sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed text-center">
          Steam cooking is emerging as a game-changer for large institutions. It’s efficient, adaptable, and cleaner. Key benefits include:
        </p>

          </div>

            <div className="relative flex flex-col md:flex-row justify-center items-center mt-14 px-7 md:gap-60 gap-10">
              {/* Left Image */}
              <img
                src={benefitImages[selectedBenefit].left}
                alt="Steam Cooking Left"
                className="h-[600px] w-[400px] md:h-[600px] md:w-[400px] object-cover rounded-xl shadow-lg"
              />

              {/* Center Content */}
            <motion.div
              className="flex flex-col gap-6 max-w-[600px] my-6 md:my-0"
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }} // 👈 triggers on scroll
            >
              {benefits.map((text) => (
                <motion.div
                  key={text}
                  variants={itemVariants}
                  onClick={() => setSelectedBenefit(text)}
                  className={`flex items-center bg-white shadow-lg rounded-xl px-6 py-6 text-gray-800 text-lg font-semibold w-full min-h-[90px] cursor-pointer ${
                    selectedBenefit === text ? "border-2 border-green-500" : ""
                  }`}
                >
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4" />
                  {text}
                </motion.div>
              ))}
            </motion.div>


              {/* Right Image */}
              <img
                src={benefitImages[selectedBenefit].right}
                alt="Steam Cooking Right"
                className="h-[600px] w-[400px] md:h-[600px] md:w-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>
    </section>

      {/* Our Partners */}
<section className="py-20 relative overflow-hidden bg-gradient-to-r from-green-50 via-white to-green-50">
  {/* Background bubbles */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200 rounded-full opacity-30 animate-pulse-slow -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-green-100 rounded-full opacity-25 animate-pulse-slow translate-x-1/2 translate-y-1/2"></div>
  <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-green-300 rounded-full opacity-20 animate-pulse-slow"></div>

  <div className="container mx-auto relative z-10 text-center px-6">
    {/* Animated Heading */}
    <motion.h2
      className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      Our{" "}
      <span className="relative inline-block text-green-500">
        Partner
        <img
          src="/images/design.png"
          alt="Design"
          className="block mx-auto w-full max-w-[120px] mt-2"
        />
      </span>
    </motion.h2>

    {/* Partners Grid */}
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 items-center justify-items-center"
      variants={partnersContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((partner) => (
        <motion.div
          key={partner}
          variants={partnerItem}
          className="bg-white p-6 rounded-3xl shadow-2xl transform transition duration-500 hover:-translate-y-3 hover:scale-105"
        >
          <img
            src={`/images/partner${partner}.png`}
            alt={`Partner ${partner}`}
            className="h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition duration-500"
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/*featured section*/}
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-green-50 via-white to-green-50">
  {/* Optional abstract floating blobs */}
  <div className="absolute top-0 left-1/4 w-80 h-80 bg-green-200 rounded-full opacity-30 animate-pulse-slow -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-green-100 rounded-full opacity-25 animate-pulse-slow translate-x-1/2 translate-y-1/2"></div>
  <div className="absolute top-1/3 right-1/2 w-64 h-64 bg-green-300 rounded-full opacity-20 animate-pulse-slow"></div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Heading and Button Row */}
    <div className="flex justify-between items-center mb-10">
       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
  Featured{" "}
  <span className="relative inline-block text-green-500">
    Products
    <img
      src="/images/design.png"
      alt="Design"
      className="block mx-auto w-full max-w-[120px] mt-2"
    />
  </span>
</h2>
      <button 
      className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
      onClick={() => navigate("/Product ")} >
        View Our Products
      </button>
    </div>

    {/* Grid of 4 Images */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[1, 2, 3, 4].map((product) => (
        <div key={product} className="relative group rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/cooker.png"
            alt={`Product ${product}`}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay Arrow Button */}
          <button
            // onClick={() => alert(`Product ${product} clicked!`)}
            className="absolute bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg opacity-80 hover:opacity-100 transition"
          >
            {/* ➔ */}
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

   
    {/* Testimonials Section */}
      <section className="py-20 relative bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 overflow-hidden">
  {/* Floating abstract blobs */}
  <div className="absolute top-0 left-1/4 w-80 h-80 bg-yellow-200 rounded-full opacity-30 animate-pulse-slow -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-yellow-100 rounded-full opacity-25 animate-pulse-slow translate-x-1/2 translate-y-1/2"></div>
  <div className="absolute top-1/3 right-1/2 w-64 h-64 bg-yellow-300 rounded-full opacity-20 animate-pulse-slow"></div>

  <div className="container mx-auto text-center px-6 relative z-10">
     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
  Customer{" "}
  <span className="relative inline-block text-green-500">
    Testimonials
    <img
      src="/images/design.png"
      alt="Design"
      className="block mx-auto w-full max-w-[130px] mt-2"
    />
  </span>
</h2>

    <div className="relative flex items-center justify-center">
      {/* Left Button */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 md:left-[-50px] bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-10"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* Testimonial Box */}
      <div className="bg-yellow-100 rounded-xl shadow-2xl p-10 max-w-2xl mx-6 text-gray-800 text-lg font-medium relative">
        {/* Decorative Open Quote */}
        <span className="text-yellow-400 text-6xl absolute top-2 left-4 select-none">&ldquo;</span>

        {/* Author Name */}
        <p className="font-semibold text-gray-900 mb-4">Brian</p>

        {/* Testimonial Text */}
        <p className="relative z-10">{testimonials[current]}</p>

        {/* Decorative Close Quote */}
        <span className="text-yellow-400 text-6xl absolute bottom-2 right-4 select-none">&rdquo;</span>
      </div>
      {/* Right Button */}
      <button
        onClick={nextTestimonial}
        className="absolute right-0 md:right-[-50px] bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-10"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  </div>
</section>
      
      {/* <Footer />       */}
    </div>
  );
}


