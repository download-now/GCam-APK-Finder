export interface GCamPort {
  id: string;
  title: string;
  brand: string;
  models: string[];
  downloadUrl: string;
  version: string;
  author: string;
  releaseDate: string;
  fileSize: string;
}

export interface GCamBrand {
  id: string;
  name: string;
}

export interface Language {
  code: string;
  name: string;
  hreflang: string;
}

export interface GCamFinderProps {
  apiUrl?: string;
  defaultBrand?: string;
  defaultLanguage?: string;
  onPortFound?: (port: GCamPort) => void;
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    fontFamily?: string;
    borderRadius?: string;
  };
  showAttribution?: boolean;
  searchPlaceholder?: string;
  showLanguageSelector?: boolean;
}

export interface PhoneModelSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

export interface BrandListProps {
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
}

export interface PortResultsProps {
  ports: GCamPort[];
}

export interface LanguageSelectorProps {
  selectedLanguage: string;
  onSelectLanguage: (language: string) => void;
  languages: Language[];
}
