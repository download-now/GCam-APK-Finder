import React, { useState } from "react";
import { LanguageSelectorProps } from "../types";
import "../styles/GCamFinder.css";

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onSelectLanguage,
  languages,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (languageCode: string) => {
    onSelectLanguage(languageCode);
    setIsOpen(false);
  };

  // Find the current language name for display
  const currentLanguage = languages.find(
    (lang) => lang.code === selectedLanguage
  );

  return (
    <div className="gcam-finder-language-selector">
      <button className="gcam-finder-language-button" onClick={toggleDropdown}>
        {currentLanguage?.name || "English"}{" "}
        <span className="gcam-finder-dropdown-arrow">▼</span>
      </button>

      {isOpen && (
        <div className="gcam-finder-language-dropdown">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`gcam-finder-language-option ${
                selectedLanguage === language.code ? "selected" : ""
              }`}
              onClick={() => handleLanguageSelect(language.code)}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
