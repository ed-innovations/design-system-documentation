import React, { useState } from 'react';
import './Popup.css';

const imgCloseIcon = "https://www.figma.com/api/mcp/asset/b7cfd177-9b19-4f6f-af9a-5380cdbe3eaf";
const imgUserIcon = "https://www.figma.com/api/mcp/asset/e0d66682-8e82-4b25-947c-5181fe2f47c6";

interface PopupProps {
  title?: string;
  description?: string;
  onCancel?: () => void;
  onContinue?: () => void;
  isOpen?: boolean;
}

const Popup: React.FC<PopupProps> = ({
  title = "Verify Account",
  description = "Please confirm your identity",
  onCancel = () => {},
  onContinue = () => {},
  isOpen = true,
}) => {
  const [open, setOpen] = useState(isOpen);

  const handleCancel = () => {
    setOpen(false);
    onCancel();
  };

  const handleContinue = () => {
    setOpen(false);
    onContinue();
  };

  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container" role="dialog" aria-modal="true">
        <button 
          className="popup-close" 
          onClick={handleCancel}
          aria-label="Close dialog"
        >
          <img src={imgCloseIcon} alt="Close" />
        </button>

        <div className="popup-content">
          <div className="popup-header">
            <div className="popup-icon">
              <img src={imgUserIcon} alt="Verify" />
            </div>
            <div className="popup-text">
              <p className="popup-title">{title}</p>
              <p className="popup-description">{description}</p>
            </div>
          </div>

          <div className="popup-divider"></div>

          <div className="popup-actions">
            <button 
              className="popup-button popup-button-cancel" 
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button 
              className="popup-button popup-button-continue" 
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
