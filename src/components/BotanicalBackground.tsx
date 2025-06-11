import React from "react";

const BotanicalBackground = () => (
  <div className="pointer-events-none fixed inset-0 z-0">
    <img src="/src/assets/leaf1.svg" className="absolute top-0 left-0 w-44 opacity-25" alt="" />
    <img src="/src/assets/leaf2.svg" className="absolute bottom-0 right-0 w-40 opacity-20" alt="" />
    {/* Extra decorative SVGs for organic look */}
    <img src="/src/assets/leaf1.svg" className="absolute top-24 right-12 w-20 opacity-10 rotate-12" alt="" />
    <img src="/src/assets/leaf2.svg" className="absolute bottom-24 left-16 w-16 opacity-10 -rotate-12" alt="" />
    <img src="/src/assets/leaf1.svg" className="absolute top-1/2 left-4 w-10 opacity-10 -rotate-45" alt="" />
    <img src="/src/assets/leaf2.svg" className="absolute bottom-1/3 right-8 w-12 opacity-10 rotate-45" alt="" />
  </div>
);

export default BotanicalBackground; 