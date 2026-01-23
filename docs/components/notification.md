[Back](../index.md)
# Notification

The **Notification** component represents a compact, inline notification
with an icon, descriptive text, and action buttons.

It is visually identical to the original Figma design but refactored to be:

- Responsive
- Playground-friendly
- Easy to reuse or modify

---

## Overview

- Inline notification layout
- Fixed visual proportions with responsive shrinking
- Action-driven (Accept / Decline)

This component is best suited for:
- Permission prompts
- System notifications
- Inline alerts or confirmations

---

## Preview in Playground

![Notification component UI](../images/notification.png)

To render the Notification component locally, import it into the playground:

```tsx
import { Notification } from '../components'

export function Playground() {
  return (
    <Notification
      icon="/icons/notification.svg"
      title="New request"
      description="You have received a new access request."
      onAccept={() => console.log('Accepted')}
      onDecline={() => console.log('Declined')}
    />
  )
}
```

---
## Code
```tsx
import React from 'react';
import './Notification.css';

interface NotificationProps {
  icon: string;
  title: string;
  description: string;
  onAccept: () => void;
  onDecline: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  icon,
  title,
  description,
  onAccept,
  onDecline,
}) => {
  return (
    <div className="notification-wrapper">
      <div className="notification">
        <div className="notification-content">
          <div className="notification-icon">
            <img src={icon} alt="Notification icon" />
          </div>

          <div className="notification-text">
            <h3 className="notification-title">{title}</h3>
            <p className="notification-description">{description}</p>

            <div className="notification-buttons">
              <button
                className="notification-button notification-button-accept"
                onClick={onAccept}
              >
                Accept
              </button>

              <button
                className="notification-button notification-button-decline"
                onClick={onDecline}
              >
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
```
---
## CSS
```css
.notification-wrapper {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.notification {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.notification-content {
  display: flex;
  gap: 12px;
  align-items: center;
  max-width: 100%;
  flex-wrap: nowrap;
}

.notification-icon {
  width: 48px;
  height: 48px;
  background-color: #303030;
  border-radius: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.notification-icon img {
  width: 28px;
  height: 22px;
  position: absolute;
  left: 2.83px;
  top: 5.67px;
}

.notification-text {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 227px;
  max-width: calc(100vw - 120px);
}

.notification-title {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  color: #7c99b6;
  margin: 0;
}

.notification-description {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  color: #9db2c8;
  margin: 0;
}

.notification-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.notification-button {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  padding: 7.5px 10px;
  width: 96px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.notification-button-accept {
  background-color: #2870ed;
  color: #ffffff;
}

.notification-button-decline {
  background-color: transparent;
  border: 1px solid #868686;
  color: #868686;
}
```