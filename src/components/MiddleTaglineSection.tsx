import React from "react";

const MiddleTaglineSection = () => (
  <section className="relative flex items-center bg-burnt-orange px-4 py-8 md:px-8 md:py-16 rounded-2xl mx-4 my-8 md:mx-8 shadow-lg overflow-visible min-h-[120px] md:min-h-[180px]">
    {/* Decorative green border above */}
    <div className="absolute left-0 right-0 -top-8 flex justify-center z-20">
      <svg width="400" height="24" viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12 Q100 0 200 12 T400 12" stroke="#2C4A32" strokeWidth="3" fill="none"/>
      </svg>
    </div>
    <div className="flex-1">
      <h2 className="font-playfair text-xl md:text-3xl font-bold text-forest-green uppercase tracking-wide text-center md:text-left">
        AYURVEDIC FIBER SUPPLEMENT FOR GOOD GUT HEALTH
      </h2>
    </div>
  </section>
);

export default MiddleTaglineSection; 