import React from "react";

// Importing your images directly from src folder
import Articles1 from "../ArticalImages/Aimages/Articles1.jpg";
import Articles2 from "../ArticalImages/Aimages/Articles2.jpg";
import Articles3 from "../ArticalImages/Aimages/Articles3.jpg";
import Articles4 from "../ArticalImages/Aimages/Articles4.jpg";
import Articles5 from "../ArticalImages/Aimages/Articles5.jpg";

const currentImages = [
  {
    src: Articles1,
    title: "Steam Cooker",
    description: "Very efficient and energy saving.",
  },
  {
    src: Articles2,
    title: "Electric Pan",
    description: "Perfect for quick meals.",
  },
  {
    src: Articles3,
    title: "Modern Oven",
    description: "Cooks evenly with smart features.",
  },
  {
    src: Articles4,
    title: "Rice Cooker",
    description: "Ideal for fluffy rice every time.",
  },
  {
    src: Articles5,
    title: "Grill",
    description: "Gives food a smoky, rich taste.",
  },
];

export default function ImageGallery() {
  return (
    <div className="space-y-4">
      {currentImages.map((item, i) => (
        <div key={i} className="flex items-center gap-3 cursor-pointer">
          <img
            src={item.src}
            alt={item.title}
            className="w-40 h-28 object-cover rounded-lg shadow-md hover:opacity-90 transition"
          />
          <div>
            <p className="text-base text-gray-800 font-bold">{item.title}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
