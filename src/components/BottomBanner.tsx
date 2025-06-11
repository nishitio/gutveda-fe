import React from "react";

interface BottomBannerProps {
  onBuyNow: () => void;
}

const BottomBanner = ({ onBuyNow }: BottomBannerProps) => (
  <div className="bg-burnt-orange py-12 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-serif text-white mb-6 sm:mb-8">
          Experience the Power of Ayurveda
        </h2>
        <button
          onClick={onBuyNow}
          className="bg-forest-green text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-serif
            hover:bg-forest-green/90 transition-colors shadow-lg hover:shadow-xl"
        >
          I'm Interested
        </button>
      </div>
    </div>
  </div>
);

export default BottomBanner; 