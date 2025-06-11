import React, { ReactNode } from "react";

interface HeroSectionProps {
  children?: ReactNode;
}

const HeroSection = ({ children }: HeroSectionProps) => (
  <section className="relative flex flex-col md:flex-row items-center justify-between px-8 pt-8 pb-0 md:pt-16 md:pb-0 min-h-[40vh] z-10">
    <div className="flex-1 z-10 max-w-xl mx-auto md:mx-0">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green mb-4 leading-tight">
        Improves Fiber <br /> Intake, Naturally.
      </h1>
      <p className="text-base md:text-lg text-forest-green mb-6 font-lato">
        100% Natural And Ayurvedic Psyllium Husk That Keeps Your Gut Healthy And Happy.
      </p>
      {children}
    </div>
    {/* Decorative green border below hero */}
    <div className="absolute left-0 right-0 -bottom-8 flex justify-center z-20">
      <svg width="400" height="24" viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12 Q100 24 200 12 T400 12" stroke="#2C4A32" strokeWidth="3" fill="none"/>
      </svg>
    </div>
  </section>
);

export default HeroSection; 