import axios from "axios";
import { GCamPort, Language } from "../types";

export const searchPorts = async (
  apiUrl: string,
  brand: string = "",
  model: string = "",
  language: string = "en"
): Promise<GCamPort[]> => {
  try {
    let baseUrl = apiUrl;

    // Add language path if it's not English
    if (language !== "en") {
      baseUrl = `${apiUrl}/${language}/`;
    }

    let searchUrl = baseUrl;

    // From sitemap analysis, the URL pattern is:
    // https://gcamapk.io/google-camera-for-[brand]-[model]/
    if (brand && model) {
      const formattedBrand = formatForUrl(brand);
      const formattedModel = formatForUrl(model);
      searchUrl = `${baseUrl}google-camera-for-${formattedBrand}-${formattedModel}/`;
    } else if (brand) {
      // Search by brand only
      searchUrl = `${baseUrl}?s=${encodeURIComponent(brand)}`;
    } else if (model) {
      // Search by model only
      searchUrl = `${baseUrl}?s=${encodeURIComponent(model)}`;
    } else {
      return [];
    }

    // In a real implementation, you would use axios to fetch data from the API
    // const response = await axios.get(searchUrl);
    // Parse the response and return the data

    // For now, we'll use mock data
    return mockPortsData(brand, model);
  } catch (error) {
    console.error("Error fetching GCam ports:", error);
    throw error;
  }
};

// Helper function to format name for URL
const formatForUrl = (text: string): string => {
  // Convert spaces to hyphens and remove special characters
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

// Get supported languages from the available hreflangs
export const getSupportedLanguages = (): Language[] => {
  return [
    { code: "en", name: "English", hreflang: "en" },
    { code: "es", name: "Español", hreflang: "es" },
    { code: "fr", name: "Français", hreflang: "fr" },
    { code: "de", name: "Deutsch", hreflang: "de" },
    { code: "it", name: "Italiano", hreflang: "it" },
    { code: "pt", name: "Português", hreflang: "pt" },
    { code: "ru", name: "Русский", hreflang: "ru" },
    { code: "ja", name: "日本語", hreflang: "ja" },
    { code: "zh-CN", name: "简体中文", hreflang: "zh-CN" },
    { code: "zh-TW", name: "繁體中文", hreflang: "zh-TW" },
    { code: "ar", name: "العربية", hreflang: "ar" },
    { code: "hi", name: "हिन्दी", hreflang: "hi" },
    { code: "ko", name: "한국어", hreflang: "ko" },
    { code: "nl", name: "Nederlands", hreflang: "nl" },
    { code: "pl", name: "Polski", hreflang: "pl" },
    { code: "tr", name: "Türkçe", hreflang: "tr" },
    { code: "vi", name: "Tiếng Việt", hreflang: "vi" },
    { code: "id", name: "Bahasa Indonesia", hreflang: "id" },
    { code: "th", name: "ไทย", hreflang: "th" },
    { code: "ms", name: "Bahasa Melayu", hreflang: "ms" },
  ];
};

// Mock data for demonstration
const mockPortsData = (brand: string, model: string): GCamPort[] => {
  // In a real implementation, this would come from the API
  const mockData: Record<string, GCamPort[]> = {
    samsung: [
      {
        id: "samsung1",
        title: "GCam 8.2 for Samsung Galaxy S21/S22/S23",
        brand: "Samsung",
        models: ["Galaxy S21", "Galaxy S22", "Galaxy S23"],
        downloadUrl: "https://gcamapk.io/google-camera-for-samsung-galaxy-s22/",
        version: "8.2.300",
        author: "BSG",
        releaseDate: "2023-04-15",
        fileSize: "84 MB",
      },
      {
        id: "samsung2",
        title: "GCam 8.1 for Samsung Galaxy A52/A53/A54",
        brand: "Samsung",
        models: ["Galaxy A52", "Galaxy A53", "Galaxy A54"],
        downloadUrl: "https://gcamapk.io/google-camera-for-samsung-galaxy-a54/",
        version: "8.1.101",
        author: "Arnova8G2",
        releaseDate: "2023-02-20",
        fileSize: "78 MB",
      },
    ],
    xiaomi: [
      {
        id: "xiaomi1",
        title: "GCam 8.4 for Xiaomi Mi 11/12 Series",
        brand: "Xiaomi",
        models: ["Mi 11", "Mi 12", "Mi 12 Pro"],
        downloadUrl: "https://gcamapk.io/google-camera-for-xiaomi-mi-12/",
        version: "8.4.500",
        author: "Urnyx05",
        releaseDate: "2023-05-10",
        fileSize: "82 MB",
      },
      {
        id: "xiaomi2",
        title: "GCam 8.3 for Xiaomi Poco C71",
        brand: "Xiaomi",
        models: ["Poco C71"],
        downloadUrl: "https://gcamapk.io/google-camera-for-xiaomi-poco-c71/",
        version: "8.3.400",
        author: "BSG",
        releaseDate: "2025-04-04",
        fileSize: "81 MB",
      },
    ],
    oneplus: [
      {
        id: "oneplus1",
        title: "GCam 8.3 for OnePlus 9/10 Series",
        brand: "OnePlus",
        models: ["OnePlus 9", "OnePlus 9 Pro", "OnePlus 10", "OnePlus 10 Pro"],
        downloadUrl: "https://gcamapk.io/google-camera-for-oneplus-10-pro/",
        version: "8.3.252",
        author: "BigKaka",
        releaseDate: "2023-03-30",
        fileSize: "81 MB",
      },
    ],
    realme: [
      {
        id: "realme1",
        title: "GCam 8.2 for Realme GT Series",
        brand: "Realme",
        models: ["Realme GT", "Realme GT Neo", "Realme GT 2"],
        downloadUrl: "https://gcamapk.io/google-camera-for-realme-gt/",
        version: "8.2.204",
        author: "Wichaya",
        releaseDate: "2023-02-12",
        fileSize: "79 MB",
      },
      {
        id: "realme2",
        title: "GCam 8.1 for Realme Narzo 80x",
        brand: "Realme",
        models: ["Narzo 80x"],
        downloadUrl: "https://gcamapk.io/google-camera-for-realme-narzo-80x/",
        version: "8.1.200",
        author: "Arnova8G2",
        releaseDate: "2025-04-09",
        fileSize: "77 MB",
      },
    ],
    oppo: [
      {
        id: "oppo1",
        title: "GCam 8.1 for Oppo Find X8 Series",
        brand: "Oppo",
        models: ["Find X8", "Find X8 Pro", "Find X8 Ultra"],
        downloadUrl: "https://gcamapk.io/google-camera-for-oppo-find-x8-ultra/",
        version: "8.1.200",
        author: "Arnova8G2",
        releaseDate: "2025-04-10",
        fileSize: "77 MB",
      },
      {
        id: "oppo2",
        title: "GCam 8.2 for Oppo Pad 4 Pro",
        brand: "Oppo",
        models: ["Pad 4 Pro"],
        downloadUrl: "https://gcamapk.io/google-camera-for-oppo-pad-4-pro/",
        version: "8.2.150",
        author: "BSG",
        releaseDate: "2025-04-10",
        fileSize: "80 MB",
      },
    ],
    redmi: [
      {
        id: "redmi1",
        title: "GCam 8.3 for Redmi Note 14S",
        brand: "Redmi",
        models: ["Redmi Note 14S"],
        downloadUrl:
          "https://gcamapk.io/google-camera-for-xiaomi-redmi-note-14s/",
        version: "8.3.300",
        author: "BSG",
        releaseDate: "2025-03-31",
        fileSize: "81 MB",
      },
    ],
    poco: [
      {
        id: "poco1",
        title: "GCam 8.4 for Poco F7 Series",
        brand: "Poco",
        models: ["Poco F7", "Poco F7 Pro", "Poco F7 Ultra"],
        downloadUrl:
          "https://gcamapk.io/google-camera-for-xiaomi-poco-f7-ultra/",
        version: "8.4.400",
        author: "Urnyx05",
        releaseDate: "2025-03-31",
        fileSize: "83 MB",
      },
    ],
    nothing: [
      {
        id: "nothing1",
        title: "GCam 8.2 for Nothing Phone (1) and (2)",
        brand: "Nothing",
        models: ["Nothing Phone (1)", "Nothing Phone (2)"],
        downloadUrl: "https://gcamapk.io/google-camera-for-nothing-phone-2/",
        version: "8.2.250",
        author: "BSG",
        releaseDate: "2023-05-30",
        fileSize: "80 MB",
      },
    ],
    vivo: [
      {
        id: "vivo1",
        title: "GCam 8.2 for Vivo Y300i",
        brand: "Vivo",
        models: ["Y300i"],
        downloadUrl: "https://gcamapk.io/google-camera-for-vivo-y300i/",
        version: "8.2.200",
        author: "Arnova8G2",
        releaseDate: "2025-03-31",
        fileSize: "79 MB",
      },
      {
        id: "vivo2",
        title: "GCam 8.3 for Vivo iQOO Z10",
        brand: "Vivo",
        models: ["iQOO Z10"],
        downloadUrl: "https://gcamapk.io/google-camera-for-vivo-iqoo-z10/",
        version: "8.3.250",
        author: "Wichaya",
        releaseDate: "2025-04-11",
        fileSize: "82 MB",
      },
    ],
    motorola: [
      {
        id: "motorola1",
        title: "GCam 8.2 for Motorola Edge 60 Stylus",
        brand: "Motorola",
        models: ["Edge 60 Stylus"],
        downloadUrl:
          "https://gcamapk.io/google-camera-for-motorola-edge-60-stylus/",
        version: "8.2.300",
        author: "BSG",
        releaseDate: "2025-04-10",
        fileSize: "80 MB",
      },
    ],
    lava: [
      {
        id: "lava1",
        title: "GCam 8.1 for Lava Bold",
        brand: "Lava",
        models: ["Bold"],
        downloadUrl: "https://gcamapk.io/google-camera-for-lava-bold/",
        version: "8.1.200",
        author: "Arnova8G2",
        releaseDate: "2025-04-02",
        fileSize: "78 MB",
      },
    ],
  };

  const lowerBrand = brand.toLowerCase();

  // If there's a model search, try to filter results that match the model
  if (model && mockData[lowerBrand]) {
    const modelLower = model.toLowerCase();
    const filteredPorts = mockData[lowerBrand].filter((port) => {
      return port.models.some((m) => m.toLowerCase().includes(modelLower));
    });

    return filteredPorts.length > 0 ? filteredPorts : mockData[lowerBrand];
  }

  // Return matched brand data or empty array
  return mockData[lowerBrand] || [];
};
