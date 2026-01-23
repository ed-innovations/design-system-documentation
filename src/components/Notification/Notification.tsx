import React from 'react';
import './Notification.css';

interface NotificationProps {
  icon: string;
  title: string;
  description: string;
  onAccept: () => void;
  onDecline: () => void;
}

const Notification: React.FC<NotificationProps> = ({ icon, title, description, onAccept, onDecline }) => {
  return (
      <div className={"notification-wrapper"}>
        <div className="notification">
          <div className="notification-content">
            <div className="notification-icon">
              <img src={icon} alt="Notification icon" />
            </div>
            <div className="notification-text">
              <h3 className="notification-title">{title}</h3>
              <p className="notification-description">{description}</p>
              <div className="notification-buttons">
                <button className="notification-button notification-button-accept" onClick={onAccept}>
                  Accept
                </button>
                <button className="notification-button notification-button-decline" onClick={onDecline}>
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Notification;
