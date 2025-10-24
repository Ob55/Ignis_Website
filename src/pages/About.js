import { useState ,useEffect } from "react";
import { FaUniversity, FaHandshake, FaLeaf, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";


export default function About() {
  const [selected, setSelected] = useState("institutional");
    const [, setShowVision] = useState(false);


        useEffect(() => {
    const id = setInterval(() => setShowVision((p) => !p), 8000);
    return () => clearInterval(id);
  }, []);
 // Animation variants
  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 1.2 },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

const teamMembers = [
  {
    name: "Paul Osogo",
    dept: "CEO",
    img: `${process.env.PUBLIC_URL}/images/paul.webp`,
    linkedin: "https://www.linkedin.com/in/paul-osogo-a5451933/",
  },
  {
    name: "Dennis Nderitu",
    dept: "Managing Director",
    img: `${process.env.PUBLIC_URL}/images/Dennis.webp`,
    linkedin: "https://www.linkedin.com/in/dennis-nderitu-8528a860/",
  },
  {
    name: "Sheila Kamaara",
    dept: "Chief of Staff",
    img: `${process.env.PUBLIC_URL}/images/Sheila.webp`,
    linkedin: "https://www.linkedin.com/in/sheila-kamaara/",
  },
  {
    name: "Fredrick Agengo",
    dept: "IGNIS Clean Cooking Hub Coordinator, Eldoret National Polytechnic",
    img: `${process.env.PUBLIC_URL}/images/DrFred.webp`,
    linkedin: "#",
  },
  {
    name: "Selah",
    dept: "Software Engineer",
    img: `${process.env.PUBLIC_URL}/images/Selah.webp`,
    linkedin: "https://www.linkedin.com/in/sharon-selah/",
  },
  {
    name: "Shadrack",
    dept: "DMRV Lead",
    img: `${process.env.PUBLIC_URL}/images/Shadrak.webp`,
    linkedin: "https://www.linkedin.com/in/shadrack-amihanda-835829204/",
  },
  {
    name: "Elizabeth",
    dept: "Marketing",
    img: `${process.env.PUBLIC_URL}/images/Elizabeth.webp`,
    linkedin: "/",
  },
];

  const content = {
    institutional: {
      title: "Institutional Steam",
      image: `${process.env.PUBLIC_URL}/images/institutional.png`,
      text: "A high-efficiency boiler generates steam that’s distributed through insulated pipes to kettles/ovens. Operators control temperature/pressure precisely; condensate recovery reduces losses. Digital sensors prompt maintenance and track usage."
    },
    household: {
      title: "Household E-Cooking",
      image: `${process.env.PUBLIC_URL}/images/household.png`,
      text: "EPCs pressure-cook with minimal energy; induction heats cookware directly for fast, clean cooking. We provide starter recipes and safety guides."
    }
  };
   //
  const features = [
    {
      title: "Sustainability",
      text: "Cuts solid fuels and emissions;\nready for carbon finance.",
    },
    {
      title: "Impact",
      text: "Reduces environmental footprint and\n improves kitchen efficiency.",
    },
    {
      title: "Excellence",
      text: "Ensures high-quality engineering \n and reliable performance.",
    },
    {
      title: "Accessibility",
      text: "Designed for ease of use and availability \nacross multiple settings.",
    },
  ];

   const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: i * 1.0 }, // stagger for total ~4s
    }),
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
<div className="relative bg-gray-100 overflow-hidden">
      {/* Floating Green Blobs */}
      {/* <div className="absolute top-0 left-[25%] w-72 h-72 sm:w-96 sm:h-96 bg-green-400 rounded-full opacity-50 animate-pulse-slow -translate-x-1/2 -translate-y-1/2 blur-2xl mix-blend-multiply pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-[33%] w-72 h-72 sm:w-96 sm:h-96 bg-green-400 rounded-full opacity-40 animate-pulse-slow blur-2xl mix-blend-multiply pointer-events-none z-0"></div> */}

      {/* Main Content */}
    <div className="relative z-10">

        {/* Mission & Vision Section */}
   <div className="relative w-full text-white m-0 p-0 overflow-hidden">
      {/* Orange Background (left side - Mission) */}
      <div
      className="absolute inset-0 bg-[#F58220]"
        style={{
          clipPath: "polygon(0 0, 70% 0, 70% 100%, 0% 100%)",
        }}
      ></div>

      {/* Green Background (right side - Vision, slanted) */}
      <div
      className="absolute inset-0 bg-[#00712D] md:[clip-path:polygon(55%_0,100%_0,100%_100%,48%_100%)] [clip-path:polygon(60%_0,100%_0,100%_100%,48%_100%)]"
      ></div>

      {/* Content grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE — Mission (flows in from left) */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start justify-center px-8 md:px-16 py-12 md:py-24 md:pl-28"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 ml-6">
            <span className="text-white">Our </span>
            <span className="relative inline-block text-white">Mission</span>
          </h2>

          {/* Underline */}
          {/* <motion.img
            src={`${process.env.PUBLIC_URL}/images/design.png`}
            alt="Design underline"
            className="block w-full max-w-[150px] mb-8 ml-[130px]"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }
          /> */}

          <p className="text-lg md:text-2xl leading-relaxed ml-10 max-w-2xl">
            We design, manufacture, and deploy clean cooking solutions for
            households and institutions that blend finance and innovation to
            help Africa cook smarter, cleaner, and with dignity.
          </p>
        </motion.div>

        {/* RIGHT SIDE — Vision (flows in from right) */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start justify-center px-8 md:px-24 py-12 md:py-24 md:pl-32"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-white">Our </span>
            <span className="text-white">Vision</span>
          </h2>

          {/* Underline */}
          {/* <motion.img
            src={`${process.env.PUBLIC_URL}/images/design.png`}
            alt="Design underline"
            className="block w-full max-w-[150px] mb-8 ml-[40px]"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          /> */}

          <p className="text-lg md:text-2xl leading-relaxed ml-10 max-w-2xl text-white">
            A cleaner, healthier, and more equitable Africa powered by
            sustainable, efficient, and dignified cooking solutions.
                      </p>
        </motion.div>
      </div>
    </div>


        {/* Track Record Section */}
<section className="mt-20 py-16 relative">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
    Our{" "}
<span className="relative inline-block text-[#00712D]">
      Track Record
      {/* <img
        src={`${process.env.PUBLIC_URL}/images/design.png`}
        alt="Design"
        className="block mx-auto w-full max-w-[160px] mt-2"
      /> */}
    </span>
  </h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-12 relative">
    {/* Institutions */}
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 4 }}
      viewport={{ once: true }}
    >
<FaUniversity className="text-[#00712D] text-6xl mb-2" />
      <h3 className="text-lg font-bold mb-1">Institutions</h3>
      <p className="text-gray-600 text-center max-w-xs">
        We have worked with multiple educational and institutional kitchens
        across the continent.
      </p>
    </motion.div>

    {/* Line 1 */}
    <motion.div
      className="hidden md:flex items-center"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 4 }}
      viewport={{ once: true }}
    >
      <div className="w-24 h-1 bg-gray-400 origin-left"></div>
    </motion.div>

    {/* Partners */}
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 4, delay: 0.5 }}
      viewport={{ once: true }}
    >
    <FaHandshake className="text-[#00712D] text-6xl mb-2" />
      <h3 className="text-lg font-bold mb-1">Partners</h3>
      <p className="text-gray-600 text-center max-w-xs">
        Collaborating with reliable partners to ensure innovative and efficient solutions.
      </p>
    </motion.div>

    {/* Line 2 */}
    <motion.div
      className="hidden md:flex items-center"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 0.2, scaleX: 0.5 }}
      transition={{ duration: 2, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-24 h-1 bg-gray-400 origin-left"></div>
    </motion.div>

    {/* Emissions */}
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 0.5, x: 0 }}
      transition={{ duration: 2, delay: 0.5 }}
      viewport={{ once: true }}
    >
    <FaLeaf className="text-[#00712D] text-6xl mb-2" />
      <h3 className="text-lg font-bold mb-1">Emissions</h3>
      <p className="text-gray-600 text-center max-w-xs">
        Reducing carbon emissions through clean and sustainable cooking
        technologies.
      </p>
    </motion.div>
  </div>
</section>



        {/* How Products Work Section */}
<section className="py-20 relative bg-gradient-to-r from-green-300 via-green-100 to-green-300 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        How The{" "}
      <span className="relative inline-block text-[#00712D]">
          Products Work
          {/* <img
            src={`${process.env.PUBLIC_URL}/images/design.png`}
            alt="Design"
            className="block mx-auto w-full max-w-[170px] mt-2"
          /> */}
        </span>
      </h2>

      <div className="container mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center gap-12">
        {/* Buttons */}
        <div className="flex flex-col gap-6 md:w-1/4">
          {Object.keys(content).map((key, idx) => (
            <motion.button
              key={key}
              onClick={() => setSelected(key)}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={buttonVariants}
              className={`text-lg md:text-xl font-bold text-left transition-colors ${
              selected === key ? "text-[#00712D]" : "text-gray-700"
              }`}
            >
              {content[key].title}
            </motion.button>
          ))}
        </div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          key={selected} // re-trigger animation when selected changes
          variants={imageVariants}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-green-400 flex items-center justify-center">
            <img
              src={content[selected].image}
              alt={content[selected].title}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="md:w-1/4 text-gray-700 text-lg md:text-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          key={selected + "-text"}
          variants={textVariants}
        >
          {content[selected].text}
        </motion.div>
      </div>
    </section>

        {/* Steam Cooking Section */}
       
 <section className="mt-1 pt-12 pb-8 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Our{" "}
<span className="relative inline-block text-[#00712D]">
          Steam Cooking
          {/* <img
            src={`${process.env.PUBLIC_URL}/images/design.png`}
            alt="Design"
            className="block mx-auto w-full max-w-[170px] mt-2"
          /> */}
        </span>
      </h2>

      <p className="text-base md:text-lg text-center max-w-2xl mx-auto mb-8 text-gray-700 leading-relaxed tracking-wide">
        We build tailored, health-first, and cost-effective kitchen systems and
        e-cooking solutions—supported by strong warranties, training, and
        responsive after-sales service.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-8 text-center">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col gap-2 md:w-1/4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={idx}
            variants={featureVariants}
          >
            <h3 className="text-lg font-bold">{feature.title}</h3>
            <p className="text-gray-600 text-sm md:text-base whitespace-pre-line">
              {feature.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
        {/* Team Section */}
    {/* Team Section */}
<section className="mt-20 pt-16 pb-8 relative bg-gradient-to-r from-green-300 via-green-100 to-green-300 z-10 overflow-hidden">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Meet{" "}
      <span className="relative inline-block text-[#00712D]">
            Our Team
            {/* <img
              src={`${process.env.PUBLIC_URL}/images/design.png`}
              alt="Design underline"
              loading="lazy"
              className="block mx-auto w-full max-w-[160px] mt-2"
            /> */}
          </span>
        </h2>

        {/* Team Grid */}
        <div className="container mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg mb-4"
                />

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-base text-[#F58220]">{member.dept}</p>

                {/* Description */}
                {/* <p className="mt-2 text-sm md:text-base text-gray-700 max-w-xs">
                  {member.desc}
                </p> */}

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-blue-500 hover:text-blue-600"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      </div>
      </div>

    </div>
  );
}
