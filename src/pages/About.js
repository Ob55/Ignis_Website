import { useState ,useEffect } from "react";
import { FaUniversity, FaHandshake, FaLeaf, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import Footer from '../components/Footer';

export default function About() {
  const [selected, setSelected] = useState("institutional");
    const [showVision, setShowVision] = useState(false);


        useEffect(() => {
    const id = setInterval(() => setShowVision((p) => !p), 8000);
    return () => clearInterval(id);
  }, []);


  const content = {
    institutional: {
      title: "Institutional Steam",
      image: "/images/institutional.png",
      text: "A high-efficiency boiler generates steam that’s distributed through insulated pipes to kettles/ovens. Operators control temperature/pressure precisely; condensate recovery reduces losses. Digital sensors prompt maintenance and track usage."
    },
    household: {
      title: "Household E-Cooking",
      image: "/images/household.png",
      text: "EPCs pressure-cook with minimal energy; induction heats cookware directly for fast, clean cooking. We provide starter recipes and safety guides."
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
<div className="relative bg-gray-100 overflow-hidden">
      {/* Floating Green Blobs */}
      <div className="absolute top-0 left-[25%] w-72 h-72 sm:w-96 sm:h-96 bg-green-400 rounded-full opacity-50 animate-pulse-slow -translate-x-1/2 -translate-y-1/2 blur-2xl mix-blend-multiply pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-[25%] w-64 h-64 sm:w-80 sm:h-80 bg-green-300 rounded-full opacity-50 animate-pulse-slow translate-x-1/2 translate-y-1/2 blur-xl mix-blend-multiply pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-[33%] w-72 h-72 sm:w-96 sm:h-96 bg-green-400 rounded-full opacity-40 animate-pulse-slow blur-2xl mix-blend-multiply pointer-events-none z-0"></div>

      {/* Main Content */}
    <div className="relative z-10">

        {/* Mission & Vision Section */}
   <div className="relative w-full text-white m-0 p-0 overflow-hidden">
  {/* Orange Background (left side) */}
  <div
    className="absolute inset-0 bg-orange-500"
    style={{
      clipPath: "polygon(0 0, 70% 0, 70% 100%, 0% 100%)", // Mobile default (straight)
    }}
  ></div>

  {/* Green Background (right side, slanted on desktop) */}
  <div
    className="absolute inset-0 bg-green-900 md:[clip-path:polygon(55%_0,100%_0,100%_100%,48%_100%)] [clip-path:polygon(60%_0,100%_0,100%_100%,48%_100%)]"
  ></div>

  {/* Content grid */}
  <div className="relative grid grid-cols-1 md:grid-cols-2">
    {/* Left side: Mission / Vision */}
    <div className="flex flex-col items-start justify-center px-8 md:px-16 py-12 md:py-24 md:pl-28">
      <AnimatePresence mode="wait">
        <motion.h2
          key={showVision ? "vision-h" : "mission-h"}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 ml-6"
        >
          <span className="text-white">Our </span>
          <span className="relative inline-block text-white-500">
            {showVision ? "Vision" : "Mission"}
          </span>
        </motion.h2>
      </AnimatePresence>

      {/* underline image */}
      <motion.img
        src="/images/design.png"
        alt="Design underline"
        className="block w-full max-w-[150px] mb-8 ml-[130px]"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <AnimatePresence mode="wait">
        {showVision ? (
          <motion.p
            key="vision-text"
            className="text-lg md:text-2xl leading-relaxed ml-10 max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            To design, manufacture, and deploy innovative <br />
            steam-based kitchen systems and e-cooking products <br />
            that make clean, reliable cooking the default <br />
            across Africa.
          </motion.p>
        ) : (
          <motion.p
            key="mission-text"
            className="text-lg md:text-2xl leading-relaxed ml-10 max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            Ignis Innovation accelerates clean institutional <br />
            kitchens and electric cooking at home <br />
            by combining fit-for-purpose technology, training, <br />
            digital monitoring, and access to finance and carbon incentives.
          </motion.p>
        )}
      </AnimatePresence>
    </div>

    {/* Right side: Image box with circle */}
    <div className="flex items-center justify-center px-8 md:px-16 py-12 md:py-24 relative">
      {/* Decorative circle */}
      <div
        className="absolute left-[10rem] top-1/3 w-56 h-56 rounded-full"
        style={{ backgroundColor: "rgba(182, 246, 166, 1)" }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={showVision ? "vision-img" : "mission-img"}
          initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.92, rotate: 4 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md h-80 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-green-600 relative z-10 flex items-center justify-center"
        >
          <img
            src={showVision ? "/images/AboutH.png" : "/images/AboutH.png"}
            alt={showVision ? "Vision Visual" : "Mission Visual"}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</div>


        {/* Track Record Section */}
        <section className="mt-20 py-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our{" "}
            <span className="relative inline-block text-orange-500">
              Track Record
              {/* Image directly below "Track Record" */}
              <img
                src="/images/design.png"
                alt="Design"
                className="block mx-auto w-full max-w-[160px] mt-2"
              />
            </span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-12 relative">
            <div className="flex flex-col items-center">
              <FaUniversity className="text-green-500 text-6xl mb-2" />
              <h3 className="text-lg font-bold mb-1">Institutions</h3>
              <p className="text-gray-600 text-center max-w-xs">
                We have worked with multiple educational and institutional kitchens across the continent.
              </p>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-24 h-1 bg-gray-400"></div>
            </div>
            <div className="flex flex-col items-center">
              <FaHandshake className="text-green-500 text-6xl mb-2" />
              <h3 className="text-lg font-bold mb-1">Partners</h3>
              <p className="text-gray-600 text-center max-w-xs">
                Collaborating with reliable partners to ensure innovative and efficient solutions.
              </p>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-24 h-1 bg-gray-400"></div>
            </div>
            <div className="flex flex-col items-center">
              <FaLeaf className="text-green-500 text-6xl mb-2" />
              <h3 className="text-lg font-bold mb-1">Emissions</h3>
              <p className="text-gray-600 text-center max-w-xs">
                Reducing carbon emissions through clean and sustainable cooking technologies.
              </p>
            </div>
          </div>
        </section>

        {/* How Products Work Section */}
        <section className="mt-20 py-16 relative bg-orange-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How The{" "}
            <span className="relative inline-block text-orange-500">
              Products Work
              {/* Image directly below "Products Work" */}
              <img
                src="/images/design.png"
                alt="Design"
                className="block mx-auto w-full max-w-[170px] mt-2"
              />
            </span>
          </h2>
          <div className="container mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center gap-12">
            <div className="flex flex-col gap-6 md:w-1/4">
              {Object.keys(content).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelected(key)}
                  className={`text-lg md:text-xl font-bold text-left transition-colors ${
                    selected === key ? "text-orange-500" : "text-gray-700"
                  }`}
                >
                  {content[key].title}
                </button>
              ))}
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-green-400 flex items-center justify-center">
                <img
                  src={content[selected].image}
                  alt={content[selected].title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-1/4 text-gray-700 text-lg md:text-xl">
              {content[selected].text}
            </div>
          </div>
        </section>

        {/* Steam Cooking Section */}
        <section className="mt-1 pt-12 pb-8 relative">
         <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Our{" "}
          <span className="relative inline-block text-orange-500">
            Steam Cooking
            {/* Image directly below "Steam Cooking" */}
            <img
              src="/images/design.png"
              alt="Design"
              className="block mx-auto w-full max-w-[170px] mt-2"
            />
          </span>
        </h2>

          <p className="text-base md:text-lg text-center max-w-2xl mx-auto mb-8 text-gray-700 leading-relaxed tracking-wide">
            We build tailored, health-first, and cost-effective kitchen systems and e-cooking solutions—supported by strong warranties, training, and responsive after-sales service.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-8 text-center">
            <div className="flex flex-col gap-2 md:w-1/4">
              <h3 className="text-lg font-bold">Sustainability</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Cuts solid fuels and emissions;<br />ready for carbon finance.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:w-1/4">
              <h3 className="text-lg font-bold">Impact</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Reduces environmental footprint and<br /> improves kitchen efficiency.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:w-1/4">
              <h3 className="text-lg font-bold">Excellence</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Ensures high-quality engineering <br /> and reliable performance.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:w-1/4">
              <h3 className="text-lg font-bold">Accessibility</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Designed for ease of use and availability <br />across multiple settings.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
<section className="mt-20 pt-16 pb-8 relative bg-green-100 z-10">
  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
    Meet{" "}
    <span className="relative inline-block text-orange-500">
      The Team
      <img
        src="/images/design.png"
        alt="Design underline"
        className="block mx-auto w-full max-w-[160px] mt-2"
      />
    </span>
  </h2>

  {/* Team Grid */}
  <div className="container mx-auto px-6 md:px-14">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        {
          name: "Paul",
          dept: "CEO",
          img: "/images/paul.jpg",
          desc: "Paul Osogo, is the Chief Executive Officer at Ignis Innovation...",
          linkedin:
            "https://www.linkedin.com/in/paul-osogo-a5451933/",
        },
        {
          name: "Dennis",
          dept: "Managing Director",
          img: "/images/Dennis.jpg",
          desc: "Dennis Nderitu is Managing Director at Ignis Innovation...",
          linkedin:
            "https://www.linkedin.com/in/dennis-nderitu-8528a860/",
        },
        {
          name: "Sheila",
          dept: "Chief of Staff",
          img: "/images/Sheila.jpg",
          desc: "Sheila Kamaara is the Chief of Staff at Ignis Innovations...",
          linkedin:
            "https://www.linkedin.com/in/sheila-kamaara/",
        },
        {
          name: "Fredrick Agengo",
          dept:
            "IGNIS Clean Cooking Hub Coordinator, Eldoret National Polytechnic",
          img: "/images/Dr Fred.jpg",
          desc: "Leads initiatives in safe, sustainable, and energy-efficient cooking...",
          linkedin: "#",
        },
        {
          name: "Selah",
          dept: "Software Engineer",
          img: "/images/Selah.jpg",
          desc: "Drives product strategy",
          linkedin:
            "https://www.linkedin.com/in/sharon-selah/",
        },
        {
          name: "Shadrack",
          dept: "DMRV Lead",
          img: "/images/Shadrak.jpg",
          desc: "Builds and scales systems",
          linkedin:
            "https://www.linkedin.com/in/shadrack-amihanda-835829204/",
        },
      ].map((member, idx) => (
        <div
          key={idx}
          className="relative group flex flex-col items-center"
        >
          {/* Profile Image */}
          <img
            src={member.img}
            alt={member.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-green-600 shadow-lg transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center p-4">
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-sm text-orange-300">{member.dept}</p>
            <p className="mt-2 text-xs">{member.desc}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-400 hover:text-blue-500"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
