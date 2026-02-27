import React, { useState } from 'react';
import './Confirmation-box.css';

const imgCloseIcon = "https://www.figma.com/api/mcp/asset/4788f212-55b8-4729-ab7c-5377acbbdfe7";
const imgCheckmark = "https://www.figma.com/api/mcp/asset/ee5931ef-171d-4838-8d83-cd326857d08e";

interface ConfirmationBoxProps {
  title?: string;
  description?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  isOpen?: boolean;
  type?: 'success' | 'warning' | 'error';
}

const ConfirmationBox: React.FC<ConfirmationBoxProps> = ({
  title = "Confirm Action",
  description = "Are you sure you want to proceed?",
  onConfirm = () => {},
  onCancel = () => {},
  isOpen = true,
  type = 'success',
}) => {
  const [open, setOpen] = useState(isOpen);

  const handleCancel = () => {
    setOpen(false);
    onCancel();
  };

  const handleConfirm = () => {
    setOpen(false);
    onConfirm();
  };

  if (!open) return null;

  return (
    <div className="confirmation-overlay">
      <div className="confirmation-container" role="alertdialog" aria-modal="true">
        <button 
          className="confirmation-close" 
          onClick={handleCancel}
          aria-label="Close dialog"
        >
          <img src={imgCloseIcon} alt="Close" />
        </button>

        <div className="confirmation-header">
          <span className="confirmation-header-placeholder"></span>
        </div>

        <div className="confirmation-icon-wrapper">
          <div className={`confirmation-icon confirmation-icon-${type}`}>
            <img src={imgCheckmark} alt={type} />
          </div>
        </div>

        <div className="confirmation-content">
          <h2 className="confirmation-title">{title}</h2>
          <p className="confirmation-description">{description}</p>
        </div>

        <div className="confirmation-actions">
          <button 
            className="confirmation-button confirmation-button-cancel" 
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button 
            className="confirmation-button confirmation-button-confirm" 
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
