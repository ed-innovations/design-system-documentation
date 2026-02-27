[Back](../README.md)
# Toast

The **Toast** component is a notification element that provides feedback or confirmation messages
to the user with a success state. It features a bright blue background with a checkmark icon
and white text, designed for displaying important status messages.

It is visually identical to the original design but refactored to be:

- Responsive
- Playground-friendly
- Easy to reuse or modify
- Accessible with proper semantic HTML (ARIA role)

---

## Overview

- Success notification with visual confirmation
- Icon support for message context
- Customizable message text
- Consistent with ERSTE design system colors
- Compact, attention-grabbing design

This component is best suited for:
- Success notifications
- Confirmation messages
- OTP verification feedback
- Form submission confirmations
- Short-lived status updates

---

## Preview in Playground

![Toast component UI](../images/toast.png)

To render the Toast component locally, import it into the playground:

```tsx
import { Toast } from '../components'

export function Playground() {
  return (
    <Toast
      message="OTP Verified Successfully"
      onClose={() => console.log('Toast closed')}
    />
  )
}
```

---
## Code
```tsx
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
```

---
## CSS
```css
/* --- Playground-safe centering --- */
.toast-wrapper {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

/* --- Toast Container --- */
.toast-container {
  width: 335px;
  padding: 10px;
  
  background-color: #007AFF;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
}

/* --- Toast Content --- */
.toast-content {
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
}

/* --- Toast Icon --- */
.toast-icon {
  width: 24px;
  height: 24px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.toast-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* --- Toast Message --- */
.toast-message {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  color: #FFFFFF;
  
  margin: 0;
  flex: 1;
  word-wrap: break-word;
}
```

---

## Design Details

### Color Palette
- **Background**: #007AFF (Bright Blue/Primary)
- **Text**: #FFFFFF (White)
- **Icon**: White checkmark

### Typography
- **Font Family**: Inter
- **Font Weight**: Regular (400)
- **Font Size**: 16px
- **Line Height**: 1.4

### Dimensions
- **Width**: 335px
- **Padding**: 10px
- **Border Radius**: 8px
- **Icon Size**: 24px × 24px
- **Icon Gap**: 12px

### Accessibility
- Uses semantic HTML with `role="alert"` for screen readers
- Checkmark icon provides visual confirmation
- High contrast ratio for visibility (white text on blue background)
