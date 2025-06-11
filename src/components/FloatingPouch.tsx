import React from "react";

interface FloatingPouchProps {
  format: string;
}

const FloatingPouch = ({ format }: FloatingPouchProps) => {
  const getProductImage = () => {
    switch (format) {
      case "finepowder":
        return "/assets/pouch.png";
      case "husk":
        return "/assets/husk.png";
      case "tablets":
        return "/assets/tablets.png";
      default:
        return "/assets/pouch.png";
    }
  };

  return (
    <div className="absolute top-24 right-0 w-[570px] h-[570px] z-20 hidden md:block lg:w-[570px] lg:h-[570px]">
      <img
        src={getProductImage()}
        alt="GutVeda Product"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default FloatingPouch; 