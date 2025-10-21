// import Footer from "../components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  { question: "How long is the delivery period?", answer: "Households: 3 working days.Institutional: ~2 months from contract (design, fabrication, installation, training)." },
  { question: "Efficiency: What savings should we expect?", answer: "Steam kitchens reduce fuel use and staff hours for large-batch cooking; EPCs/induction cut energy use vs. resistance/solid fuels. Actual savings depend on menu, volumes, tariff/fuel, and operating practices." },
  { question: "Returns & Warranties?", answer: "1-year warranty; manufacturing defects covered." },
  { question: "Maintenance?", answer: "Through Ignis hubs/workshops with qualified technicians; digital prompts help schedule preventive service." },
  { question: "Energy sources & resilience?", answer: "Electric or LPG/biogas, or hybrid. We’ll design around your tariff, load availability, and backup needs." },
  { question: "Safety & training?", answer: "Standard operating procedures, and periodic refreshers included in commissioning." },
  { question: "Financing options?", answer: "Referrals to bank partners; we also leverage carbon incentives to lower effective costs." },
  { question: "Site requirements for steam?", answer: "Space for boiler room, ventilation, water quality considerations, drainage/condensate routing, and staff training." },
  { question: "Is there a career page?", answer: "Yes, please visit our careers page for openings." },
  { question: "Do you provide training?", answer: "Yes, we provide training for select software solutions." },
  { question: "How can I stay updated?", answer: "Subscribe to our newsletter for updates." },
  { question: "Can I partner with you?", answer: "Yes, we welcome partnerships; contact us to discuss." },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Section 1: Sharp Split Header */}
      <div className="relative w-full text-white text-center py-16 px-4 overflow-hidden">
        <div
        className="absolute inset-0 bg-[#F58220]"
          style={{ clipPath: "polygon(0 0, 70% 0, 70% 100%, 0% 100%)" }}
        ></div>
        <div
        className="absolute inset-0 bg-[#00712D]"
          style={{
            clipPath:
              window.innerWidth >= 768
                ? "polygon(60% 0, 100% 0, 100% 100%, 55% 100%)"
                : "polygon(60% 0, 100% 0, 100% 100%, 48% 100%)",
          }}
        ></div>
        <h1 className="relative text-4xl md:text-6xl font-bold">
          Frequently Asked Questions
        </h1>
      </div>

      {/* Section 2: FAQ Accordion with animation */}
      <div className="p-4 md:p-10 max-w-4xl mx-auto space-y-6">
        {faqData.map((faq, index) => (
           <motion.div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm p-4 md:p-6 bg-white"
              initial={{ opacity: 0, x: index % 2 === 0 ? 120 : -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 3,         // slower (2s)
                ease: "easeOut",     // smooth ease
              }}
              viewport={{ once: true, amount: 0.2 }} // triggers when 20% visible
            >
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h2>
                <span className="text-[#00712D] text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Answer with expand animation */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                <div
                  className="mt-2 text-gray-700 text-base md:text-lg"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
        </motion.div>
      </motion.div>

        ))}
      </div>

      {/* <Footer /> */}
    </div>
  );
}
