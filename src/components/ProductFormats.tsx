import React from "react";

interface ProductFormatsProps {
  format: string;
  setFormat: (f: string) => void;
}

const formats = [
  { key: "finepowder", icon: "/assets/finepowder.svg", label: "Powder" },
  { key: "husk", icon: "/assets/husk.svg", label: "Husk" },
  { key: "tablets", icon: "/assets/tablets.svg", label: "Tablets" },
];

const ProductFormats = ({ format, setFormat }: ProductFormatsProps) => (
  <div className="flex flex-wrap justify-center gap-2 sm:gap-0 items-center rounded-3xl px-2 py-1 shadow border border-forest-green max-w-full">
    {formats.map((f, i) => {
      const selected = format === f.key;
      return (
        <button
          key={f.key}
          className={`flex flex-col items-center px-2 py-2 text-center focus:outline-none transition relative group
            ${selected ? "bg-burnt-orange shadow-lg" : "bg-beige hover:bg-beige"}
            rounded-full border-2
            ${selected ? "border-burnt-orange" : "border-transparent hover:border-forest-green"}
            mx-1
            focus-visible:ring-2 focus-visible:ring-burnt-orange
            min-w-[80px] sm:min-w-0 flex-grow
          `}
          aria-pressed={selected}
          aria-label={f.label}
          onClick={() => setFormat(f.key)}
          type="button"
        >
          <span className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full mb-1 transition
            ${selected ? "bg-beige" : "bg-beige"}
            ${selected ? "ring-2 ring-burnt-orange" : "ring-1 ring-forest-green/30"}
          `}>
            <img
              src={f.icon}
              alt={f.label}
              className="w-full h-full transition"
            />
          </span>
          <span className={`text-xs sm:text-xs font-bold transition
            ${selected ? "text-white" : "text-forest-green"}
          `}>
            {f.label.split(' ')[0]}
          </span>
          <span className={`text-[10px] sm:text-[10px] leading-tight transition
            ${selected ? "text-white" : "text-forest-green"}
          `}>
            {f.label.split(' ')[1] || ''}
          </span>
        </button>
      );
    })}
  </div>
);

export default ProductFormats; 