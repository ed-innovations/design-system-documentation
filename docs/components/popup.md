[Back](../README.md)
# Popup

The **Popup** component is a modal dialog for confirmation prompts and user interactions.
It features a white container with a user icon, title, description, and action buttons,
designed for important user confirmations and verifications.

It is visually identical to the original design but refactored to be:

- Responsive
- Playground-friendly
- Easy to reuse or modify
- Accessible with proper ARIA attributes

---

## Overview

- Modal dialog with overlay backdrop
- User verification icon with light blue background
- Customizable title and description
- Cancel and Continue action buttons
- Close button for dismissal
- State management for open/close

This component is best suited for:
- Account verification dialogs
- Confirmation prompts
- User action confirmations
- Important notifications requiring user response
- Form submission confirmations

---

## Preview in Playground

![Popup component UI](../images/popup.png)

To render the Popup component locally, import it into the playground:

```tsx
import { Popup } from '../components'

export function Playground() {
  return (
    <Popup
      title="Verify Account"
      description="Please confirm your identity"
      onCancel={() => console.log('Cancelled')}
      onContinue={() => console.log('Continued')}
      isOpen={true}
    />
  )
}
```

---
## Code
```tsx
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
```

---
## CSS
```css
/* --- Popup Overlay (backdrop) --- */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
}

/* --- Popup Container --- */
.popup-container {
  width: 100%;
  max-width: 327px;
  
  background-color: #FFFFFF;
  border-radius: 24px;
  padding: 24px 18px;
  
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
}

/* --- Close Button --- */
.popup-close {
  position: absolute;
  top: 16px;
  right: 16px;
  
  width: 24px;
  height: 24px;
  
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  transition: opacity 0.2s ease;
}

.popup-close:hover {
  opacity: 0.7;
}

/* --- Popup Content --- */
.popup-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
}

/* --- Popup Header --- */
.popup-header {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

/* --- Popup Icon --- */
.popup-icon {
  width: 66px;
  height: 66px;
  min-width: 66px;
  
  background-color: #CED9E4;
  border-radius: 120px;
  
  display: flex;
  align-items: center;
  justify-content: center;
}

/* --- Popup Text --- */
.popup-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.popup-title,
.popup-description {
  margin: 0;
  
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  
  height: 10px;
  border-radius: 4px;
  width: 120px;
}

.popup-title {
  background-color: #BDCCDB;
  color: #BDCCDB;
}

.popup-description {
  background-color: #E4EAF0;
  color: #E4EAF0;
}

/* --- Popup Divider --- */
.popup-divider {
  width: 100%;
  height: 1px;
  background-color: #EFEFF4;
  border-radius: 40px;
}

/* --- Popup Actions --- */
.popup-actions {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 8px;
}

/* --- Popup Buttons --- */
.popup-button {
  flex: 1;
  padding: 12px 16px;
  
  background: none;
  border: none;
  border-radius: 8px;
  
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
  color: #2870ED;
  
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.popup-button:hover {
  opacity: 0.8;
}

.popup-button:active {
  opacity: 0.6;
}
```

---

## Design Details

### Color Palette
- **Background**: #FFFFFF (White)
- **Icon Background**: #CED9E4 (Light Grey)
- **Overlay**: rgba(0, 0, 0, 0.5) (Semi-transparent black)
- **Button Text**: #2870ED (Bright Blue)
- **Divider**: #EFEFF4 (Very Light Grey)
- **Placeholder Text**: #BDCCDB, #E4EAF0 (Light Greys)

### Typography
- **Font Family**: Inter
- **Font Weight**: Semibold (600)
- **Font Size**: 18px (buttons), 16px (text)
- **Line Height**: 1.4

### Dimensions
- **Max Width**: 327px
- **Padding**: 24px (top/bottom), 18px (sides)
- **Border Radius**: 24px (dialog), 120px (icon)
- **Icon Size**: 66px × 66px
- **Close Button**: 24px × 24px

### Interactions
- Modal dialog with semi-transparent backdrop
- Hover effects on buttons and close button
- State management for opening/closing
- Smooth transitions (0.2s ease)
- Responsive on mobile devices
