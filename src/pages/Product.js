import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Product() {
    const products = [
    {
      category: "Electric Pressure Cookers (EPCs)",
      items: [
        { id: 1, name: "IGNIS 6 lts", details: "4 – 6 persons", image: "/images/epc6.png" },
        { id: 2, name: "IGNIS 10 lts", details: "10 – 14 persons", image: "/images/epc10.png" },
        { id: 3, name: "IGNIS 50 lts", details: "40 – 100 pax", image: "/images/epc50.png" },
      ],
    },
    {
      category: "Induction Cookers (ICD)",
      items: [
        { id: 4, name: "2 Burner", details: "Efficient and fast cooking", image: "/images/icd2.png" },
        { id: 5, name: "Single Burner", details: "Compact and portable", image: "/images/icd1.png" },
      ],
    },
    {
      category: "Institutional Steam Cookers",
      items: [
        { id: 6, name: "IGNIS KIFARU (1000)", details: "Capacity: 300", image: "/images/kifaru.png" },
        { id: 7, name: "IGNIS NYATI (1500)", details: "Capacity: 450 – 500", image: "/images/nyati.png" },
        { id: 8, name: "IGNIS TEMBO (2000)", details: "Capacity: 600 – 700", image: "/images/tembo.png" },
        { id: 9, name: "IGNIS SIMBA (2500)", details: "Capacity: 1000 plus", image: "/images/simba.png" },
      ],
    },
    {
      category: "Cooking Pots for IC",
      items: [
        { id: 10, name: "6 pcs", details: "Durable set of 6 pots", image: "/images/pot6.png" },
        { id: 11, name: "4 pcs", details: "Compact set of 4 pots", image: "/images/pot4.png" },
      ],
    },
  ];

  const whatsappNumber = "+254724326256";
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [captchaValid, setCaptchaValid] = useState(false);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
  };

  const handleConfirm = () => {
    if (!captchaValid) {
      alert("⚠️ Please verify reCAPTCHA before continuing.");
      return;
    }
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello, I want to buy ${encodeURIComponent(
        selectedProduct.name
      )}`,
      "_blank"
    );
    setSelectedProduct(null); // close modal after redirect
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-green-600 text-center py-12 rounded-b-3xl shadow-md">
        <h1 className="text-4xl font-extrabold text-white tracking-wide">
          Our Products
        </h1>
        <p className="mt-3 text-lg text-green-100">
          Explore our product range and order instantly on WhatsApp
        </p>
      </div>

      {/* Categories & Products */}
      <div className="p-10 space-y-12">
        {products.map((category) => (
          <div key={category.category}>
            <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-500 pb-2">
              {category.category}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {category.items.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <img src={p.image} alt={p.name} className="w-full h-52 object-cover rounded-lg" />
                  <h2 className="mt-4 text-xl font-semibold text-gray-800">{p.name}</h2>
                  <p className="text-gray-600 text-sm">{p.details}</p>
                  <button
                    onClick={() => handleBuyClick(p)}
                    className="mt-4 block w-full bg-green-600 text-white py-2 rounded-lg text-center font-medium hover:bg-green-700 transition"
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Security Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Confirm WhatsApp Order
            </h2>
            <p className="text-gray-600 mb-4">
              You’re about to order: <strong>{selectedProduct.name}</strong>
            </p>
            <ReCAPTCHA
              sitekey="6LeQB7orAAAAAO0wYtyGSghWFJF0YLQ8s-kX_Hqo" // ✅ use your site key
              onChange={() => setCaptchaValid(true)}
              onExpired={() => setCaptchaValid(false)}
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Continue to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
