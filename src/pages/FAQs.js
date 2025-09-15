import Footer from "../components/Footer";
import { useState } from "react";

const faqData = [
  { question: "How long is the delivery period?", answer: "Households: 3 working days.<br />Institutional: ~2 months from contract (design, fabrication, installation, training)." },
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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFAQs = faqData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(faqData.length / itemsPerPage);

  return (
    <div>
      {/* Section 1: Sharp Split Header */}
  <div className="relative w-full text-white text-center py-16 px-4 overflow-hidden">
  {/* Orange Background (left side) */}
  <div
    className="absolute inset-0 bg-orange-500"
    style={{
      clipPath: "polygon(0 0, 70% 0, 70% 100%, 0% 100%)", // Orange = 70%
    }}
  ></div>

  {/* Green Background (right side, slanted) */}
  <div
    className="absolute inset-0 bg-green-900"
    style={{
      clipPath:
        window.innerWidth >= 768
          ? "polygon(60% 0, 100% 0, 100% 100%, 55% 100%)" // Green smaller & slanted
          : "polygon(60% 0, 100% 0, 100% 100%, 48% 100%)", // Mobile = straight
    }}
  ></div>

  {/* Text on top */}
  <h1 className="relative text-4xl md:text-6xl font-bold">
    Frequently Asked Questions
  </h1>
</div>




      {/* Section 2: FAQ Table (responsive wrapper) */}
      <div className="p-4 md:p-10 max-w-6xl mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm md:text-lg">
            <thead className="bg-green-500 text-base md:text-xl">
              <tr>
                <th className="border px-3 md:px-6 py-2 md:py-3">#</th>
                <th className="border px-3 md:px-6 py-2 md:py-3">Question</th>
                <th className="border px-3 md:px-6 py-2 md:py-3">Answer</th>
              </tr>
            </thead>
            <tbody>
              {currentFAQs.map((faq, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 text-sm md:text-lg"
                >
                  <td className="border px-3 md:px-6 py-2 md:py-4 text-center font-bold">
                    {startIndex + index + 1}
                  </td>
                  <td className="border px-3 md:px-6 py-2 md:py-4 font-semibold">
                    {faq.question}
                  </td>
                  <td
                    className="border px-3 md:px-6 py-2 md:py-4 text-gray-700"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-2 md:px-6 md:py-3 bg-gray-300 rounded text-sm md:text-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm md:text-lg">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={currentPage === totalPages - 1}
            className="px-4 py-2 md:px-6 md:py-3 bg-gray-300 rounded text-sm md:text-lg disabled:opacity-50 hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
