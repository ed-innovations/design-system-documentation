import React from 'react';
import './Upload.css';

const uploadIcon = "https://www.figma.com/api/mcp/asset/d8018a81-92f5-43c8-b6ce-c2b3dd5e1b0b";

const Upload: React.FC = () => {
  return (
    <div className="upload-wrapper">
      <div className="upload-container">
        <div className="upload-header">
          <h2 className="upload-title">Upload you receipt or type in your products manualy</h2>
        </div>

        <div className="upload-icon-section">
          <div className="upload-icon-container">
            <img src={uploadIcon} alt="Upload" className="upload-icon" />
          </div>
        </div>

        <div className="upload-actions">
          <button className="upload-button">Upload</button>

          <div className="upload-divider">
            <div className="divider-line"></div>
            <span className="divider-text">or</span>
            <div className="divider-line"></div>
          </div>

          <button className="upload-alternative">Type in Manually</button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
