import React from "react";
import { PhoneModelSearchProps } from "../types";
import "../styles/GCamFinder.css";

const PhoneModelSearch: React.FC<PhoneModelSearchProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = "Enter your phone model",
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="gcam-finder-search">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className="gcam-finder-input"
      />
      <button onClick={onSearch} className="gcam-finder-search-button">
        Search
      </button>
    </div>
  );
};

export default PhoneModelSearch;
