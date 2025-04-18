import React from "react";
import { PortResultsProps } from "../types";
import "../styles/GCamFinder.css";

const PortResults: React.FC<PortResultsProps> = ({ ports }) => {
  if (ports.length === 0) {
    return null;
  }

  return (
    <div className="gcam-finder-results">
      <h3>Available GCam Ports</h3>
      <div className="gcam-finder-ports-grid">
        {ports.map((port) => (
          <div key={port.id} className="gcam-finder-port-card">
            <h4>{port.title}</h4>
            <p className="gcam-finder-port-version">Version: {port.version}</p>
            <p className="gcam-finder-port-author">By: {port.author}</p>
            <p className="gcam-finder-port-size">Size: {port.fileSize}</p>
            <p className="gcam-finder-port-date">
              Released: {port.releaseDate}
            </p>
            <a
              href={port.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gcam-finder-download-button"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortResults;
