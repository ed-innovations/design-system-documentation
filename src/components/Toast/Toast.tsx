import React from 'react';
import './Toast.css';

const imgCheckIcon = "https://www.figma.com/api/mcp/asset/fff5434f-883c-41ba-a4a2-d560bd257f35";

interface ToastProps {
  message?: string;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message = "OTP Verified Successfully",
  onClose = () => {},
}) => {
  return (
    <div className="toast-wrapper">
      <div 
        className="toast-container" 
        data-name="state=success, dark=false"
        role="alert"
      >
        <div className="toast-content">
          <div className="toast-icon">
            <img src={imgCheckIcon} alt="Success" />
          </div>
          <p className="toast-message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
