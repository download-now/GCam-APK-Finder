import React from "react";
import { BrandListProps, GCamBrand } from "../types";
import "../styles/GCamFinder.css";

const BrandList: React.FC<BrandListProps> = ({
  selectedBrand,
  onSelectBrand,
}) => {
  const brands: GCamBrand[] = [
    { id: "samsung", name: "Samsung" },
    { id: "xiaomi", name: "Xiaomi" },
    { id: "oneplus", name: "OnePlus" },
    { id: "realme", name: "Realme" },
    { id: "oppo", name: "Oppo" },
    { id: "redmi", name: "Redmi" },
    { id: "poco", name: "Poco" },
    { id: "nothing", name: "Nothing" },
    { id: "vivo", name: "Vivo" },
    { id: "motorola", name: "Motorola" },
    { id: "lava", name: "Lava" },
  ];

  return (
    <div className="gcam-finder-brand-list">
      {brands.map((brand) => (
        <button
          key={brand.id}
          className={`gcam-finder-brand-button ${
            selectedBrand === brand.id ? "selected" : ""
          }`}
          onClick={() => onSelectBrand(brand.id)}
        >
          {brand.name}
        </button>
      ))}
    </div>
  );
};

export default BrandList;
