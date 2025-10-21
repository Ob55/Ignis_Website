import React, { useState } from "react";
import { useCart } from "../CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product() {
  const { addToCart } = useCart();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [marketingCode, setMarketingCode] = useState("");
  const [showModal, setShowModal] = useState(false);

const products = [
  {
    category: "Electric Pressure Cookers (EPCs)",
    items: [
      { id: 1, name: "IGNIS 6 lts", details: "4 – 6 persons", image: `${process.env.PUBLIC_URL}/images/epc6.jpeg` },
      { id: 2, name: "IGNIS 10 lts", details: "10 – 14 persons", image: `${process.env.PUBLIC_URL}/images/epc10.jpeg` },
      { id: 3, name: "IGNIS 50 lts", details: "40 – 100 pax", image: `${process.env.PUBLIC_URL}/images/epc50.png` },
    ],
  },
  {
    category: "Induction Cookers (ICD)",
    items: [
      { id: 4, name: "2 Burner", details: "Efficient and fast cooking", image: `${process.env.PUBLIC_URL}/images/icd2.png` },
      { id: 5, name: "Single Burner", details: "Compact and portable", image: `${process.env.PUBLIC_URL}/images/icd1.png` },
    ],
  },
  {
    category: "Institutional Steam Cookers",
    items: [
      { id: 6, name: "IGNIS KIFARU (1000)", details: "Capacity: 300", image: `${process.env.PUBLIC_URL}/images/kifaru.jpeg` },
      { id: 7, name: "IGNIS NYATI (1500)", details: "Capacity: 450 – 500", image: `${process.env.PUBLIC_URL}/images/nyati.png` },
      { id: 8, name: "IGNIS TEMBO (2000)", details: "Capacity: 600 – 700", image: `${process.env.PUBLIC_URL}/images/tembo.png` },
      { id: 9, name: "IGNIS SIMBA (2500)", details: "Capacity: 1000 plus", image: `${process.env.PUBLIC_URL}/images/simba.png` },
    ],
  },
  {
    category: "Cooking Pots for IC",
    items: [
      { id: 10, name: "6 pcs", details: "Durable set of 6 pots", image: `${process.env.PUBLIC_URL}/images/pot6.png` },
      { id: 11, name: "4 pcs", details: "Compact set of 4 pots", image: `${process.env.PUBLIC_URL}/images/pot4.png` },
    ],
  },
];


  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleConfirmAdd = () => {
    const code = marketingCode.trim() || "direct";

    addToCart({ ...selectedProduct, marketingCode: code });

    toast.success(`${selectedProduct.name} added to cart! (Code: ${code})`, {
      position: "top-right",
      autoClose: 2000,
    });

    // reset & close modal
    setMarketingCode("");
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
<div className="min-h-screen bg-gradient-to-r from-green-300 via-green-100 to-green-300 overflow-hidden">
      {/* Header Section */}
      <div className="relative w-full text-white text-center py-[90px] px-[30px] md:py-[150px] md:px-[150px] overflow-hidden flex flex-col items-center justify-center">
        {/* Orange Background */}
        <div
            className="absolute inset-0 bg-[#F58220]"
          style={{ clipPath: "polygon(0 0, 70% 0, 70% 100%, 0% 100%)" }}
        ></div>
        {/* Green Background */}
        <div
          className="absolute inset-0 bg-[#00712D]"
          style={{
            clipPath:
              window.innerWidth >= 768
                ? "polygon(55% 0, 100% 0, 100% 100%, 46% 100%)"
                : "polygon(60% 0, 100% 0, 100% 100%, 48% 100%)",
          }}
        ></div>
        {/* Floating product image */}
        <img
          src={`${process.env.PUBLIC_URL}/images/cooker.webp`}
          alt="Products Background"
          className="absolute opacity-50 w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-contain animate-shake-slow"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
        {/* Text Content */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide relative z-10">
          Our Products
        </h1>
<p className="mt-4 text-base md:text-xl text-[#00712D] max-w-md md:max-w-2xl mx-auto relative z-10">
          Explore our product range and add to cart — checkout via WhatsApp
        </p>
      </div>

      {/* Categories & Products */}
      <div className="p-10 space-y-12">
        {products.map((category) => (
          <div key={category.category}>
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-[#00712D] pb-2">
              {category.category}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {category.items.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full max-h-64 object-contain rounded-lg"
                  />
                  <h2 className="mt-4 text-xl font-semibold text-gray-800">{p.name}</h2>
                  <p className="text-gray-600 text-sm">{p.details}</p>
                  <button
                    onClick={() => openModal(p)}
                    className="mt-4 block w-full bg-[#00712D] text-white py-2 rounded-lg text-center font-medium hover:bg-[#005A23] transition"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Marketing Code */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Enter Marketing Code</h2>
            <input
              type="text"
              value={marketingCode}
              onChange={(e) => setMarketingCode(e.target.value)}
              placeholder="e.g. M "
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-green-600"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAdd}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
