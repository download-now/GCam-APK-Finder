import React, { useState, useEffect } from "react";
import PhoneModelSearch from "./PhoneModelSearch";
import BrandList from "./BrandList";
import PortResults from "./PortResults";
import LanguageSelector from "./LanguageSelector";
import { GCamFinderProps, GCamPort, Language } from "../types";
import { searchPorts, getSupportedLanguages } from "../services/gcamService";
import "../styles/GCamFinder.css";

const GCamFinder: React.FC<GCamFinderProps> = ({
  apiUrl = "https://gcamapk.io",
  defaultBrand = "",
  defaultLanguage = "en",
  onPortFound,
  theme = {
    primaryColor: "#4CAF50",
    secondaryColor: "#333333",
    fontFamily: "Arial, sans-serif",
    borderRadius: "4px",
  },
  showAttribution = true,
  searchPlaceholder = "Enter your phone model",
  showLanguageSelector = true,
}) => {
  const [phoneModel, setPhoneModel] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>(defaultBrand);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(defaultLanguage);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [results, setResults] = useState<GCamPort[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Load supported languages
  useEffect(() => {
    const supportedLanguages = getSupportedLanguages();
    setLanguages(supportedLanguages);
  }, []);

  // Apply custom theme
  const themeStyles = {
    "--primary-color": theme.primaryColor,
    "--secondary-color": theme.secondaryColor,
    "--font-family": theme.fontFamily,
    "--border-radius": theme.borderRadius,
  } as React.CSSProperties;

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const ports = await searchPorts(
        apiUrl,
        selectedBrand,
        phoneModel,
        selectedLanguage
      );
      setResults(ports);

      if (ports.length === 0) {
        setError(
          "No GCam ports found for your device. Try a different model or check the official website."
        );
      } else if (onPortFound && ports.length > 0) {
        onPortFound(ports[0]);
      }
    } catch (err) {
      setError("Error searching for GCam ports. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    if (phoneModel) {
      handleSearch();
    }
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    // Refresh search results if we already have a search
    if (selectedBrand || phoneModel) {
      handleSearch();
    }
  };

  const openHowToInstall = () => {
    let howToUrl = `${apiUrl}/install-google-camera-mod-on-any-android/`;
    if (selectedLanguage !== "en") {
      howToUrl = `${apiUrl}/${selectedLanguage}/install-google-camera-mod-on-any-android/`;
    }
    window.open(howToUrl, "_blank");
  };

  return (
    <div className="gcam-finder-container" style={themeStyles}>
      <div className="gcam-finder-header">
        <h2>Find GCam Port for your device</h2>
        {showLanguageSelector && languages.length > 0 && (
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onSelectLanguage={handleLanguageSelect}
            languages={languages}
          />
        )}
      </div>

      <PhoneModelSearch
        value={phoneModel}
        onChange={setPhoneModel}
        onSearch={handleSearch}
        placeholder={searchPlaceholder}
      />

      <div className="gcam-finder-how-to">
        <button
          onClick={openHowToInstall}
          className="gcam-finder-how-to-button"
        >
          How to Install?
        </button>
      </div>

      <div className="gcam-finder-brands-section">
        <h3>Suggested Ports by Brand</h3>
        <BrandList
          selectedBrand={selectedBrand}
          onSelectBrand={handleBrandSelect}
        />
      </div>

      {isLoading && (
        <div className="gcam-finder-loading">Searching for ports...</div>
      )}

      {error && <div className="gcam-finder-error">{error}</div>}

      {!isLoading && !error && results.length > 0 && (
        <PortResults ports={results} />
      )}

      {showAttribution && (
        <div className="gcam-finder-attribution">
          <p>
            Data provided by{" "}
            <a
              href="https://gcamapk.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              GCamAPK.io
            </a>{" "}
            - Find Google Camera ports APK for all Android phones.
          </p>
        </div>
      )}
    </div>
  );
};

export default GCamFinder;
