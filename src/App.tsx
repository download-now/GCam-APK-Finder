import React from "react";
import GCamFinder from "./components/GCamFinder";
import { GCamPort } from "./types";
import "./App.css";

function App() {
  const handlePortFound = (port: GCamPort) => {
    console.log("GCam port found:", port);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>GCam APK Finder</h1>
        <p>Find the best Google Camera port for your Android device</p>
      </header>

      <main className="app-content">
        <GCamFinder
          defaultBrand="samsung"
          defaultLanguage="en"
          onPortFound={handlePortFound}
          theme={{
            primaryColor: "#4CAF50",
            secondaryColor: "#333333",
            fontFamily: "Arial, sans-serif",
            borderRadius: "4px",
          }}
          showAttribution={true}
          showLanguageSelector={true}
        />
      </main>

      <footer className="app-footer">
        <p>
          Visit{" "}
          <a
            href="https://gcamapk.io"
            target="_blank"
            rel="noopener noreferrer"
            className="visit-link"
          >
            gcamapk.io
          </a>{" "}
          for more information.
        </p>
      </footer>
    </div>
  );
}

export default App;
