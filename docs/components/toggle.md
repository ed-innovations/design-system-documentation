[Back](../README.md)
# Toggle

The **Toggle** component is a segmented control for switching between two mutually exclusive options.
It features two buttons within a single container, with the active option highlighted in blue
and the inactive option in grey.

It is visually identical to the original design but refactored to be:

- Responsive
- Playground-friendly
- Easy to reuse or modify
- Accessible with proper semantic HTML

---

## Overview

- Segmented control button group
- Two mutually exclusive options
- Active state with blue highlight and white text
- Inactive state with grey background and blue text
- Customizable option labels
- State management with callback handlers
- Smooth transitions and hover effects

This component is best suited for:
- Login/Signup selection
- Toggle between two views or modes
- Binary choice selections
- Filter or sorting options
- Tab-like navigation between two sections

---

## Preview in Playground

![Toggle component UI](../images/toggle.png)

To render the Toggle component locally, import it into the playground:

```tsx
import { Toggle } from '../components'

export function Playground() {
  return (
    <Toggle
      option1="Login"
      option2="Signup"
      onToggle={(option) => console.log('Selected:', option)}
      defaultActive="option1"
    />
  )
}
```

---
## Code
```tsx
import React, { useState } from 'react';
import './Toggle.css';

interface ToggleProps {
  option1?: string;
  option2?: string;
  onToggle?: (activeOption: string) => void;
  defaultActive?: 'option1' | 'option2';
}

const Toggle: React.FC<ToggleProps> = ({
  option1 = "Login",
  option2 = "Signup",
  onToggle = () => {},
  defaultActive = 'option1',
}) => {
  const [active, setActive] = useState<'option1' | 'option2'>(defaultActive);

  const handleToggle = (option: 'option1' | 'option2') => {
    setActive(option);
    onToggle(option === 'option1' ? option1 : option2);
  };

  return (
    <div className="toggle-wrapper">
      <div className="toggle-container">
        <button
          className={`toggle-button ${active === 'option1' ? 'active' : 'inactive'}`}
          onClick={() => handleToggle('option1')}
          data-name="left button active=true, dark=false"
        >
          <span className="toggle-text">{option1}</span>
        </button>
        <button
          className={`toggle-button ${active === 'option2' ? 'active' : 'inactive'}`}
          onClick={() => handleToggle('option2')}
          data-name="right button active=false, dark=false"
        >
          <span className="toggle-text">{option2}</span>
        </button>
      </div>
    </div>
  );
};

export default Toggle;
```

---
## CSS
```css
/* --- Playground-safe centering --- */
.toggle-wrapper {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

/* --- Toggle Container --- */
.toggle-container {
  display: flex;
  gap: 0;
  background-color: #E4EAF0;
  border-radius: 66px;
  padding: 0;
  width: fit-content;
}

/* --- Toggle Button --- */
.toggle-button {
  flex: 1;
  padding: 12px 28px;
  
  background: none;
  border: none;
  border-radius: 46px;
  
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  text-align: center;
  cursor: pointer;
  
  transition: all 0.3s ease;
  min-width: 120px;
}

/* --- Active State --- */
.toggle-button.active {
  background-color: #2870ED;
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(40, 112, 237, 0.2);
}

/* --- Inactive State --- */
.toggle-button.inactive {
  background-color: transparent;
  color: #2870ED;
  opacity: 0.77;
}

/* --- Toggle Text --- */
.toggle-text {
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  display: block;
  white-space: nowrap;
}

/* --- Hover State --- */
.toggle-button:hover {
  opacity: 0.9;
}

.toggle-button.active:hover {
  opacity: 1;
  background-color: #1e5ad4;
}

/* --- Mobile Responsive --- */
@media (max-width: 480px) {
  .toggle-button {
    padding: 10px 20px;
    font-size: 14px;
    min-width: 100px;
  }
}
```

---

## Design Details

### Color Palette
- **Container Background**: #E4EAF0 (Light Grey)
- **Active Button**: #2870ED (Bright Blue)
- **Active Text**: #FFFFFF (White)
- **Inactive Text**: #2870ED (Bright Blue)
- **Inactive Opacity**: 77%

### Typography
- **Font Family**: Inter
- **Font Weight**: Semibold (600)
- **Font Size**: 16px
- **Line Height**: 1.4

### Dimensions
- **Button Padding**: 12px (vertical) × 28px (horizontal)
- **Button Border Radius**: 46px
- **Container Border Radius**: 66px
- **Minimum Button Width**: 120px

### States
- **Active**: Blue background, white text, subtle shadow
- **Inactive**: Transparent background, blue text at 77% opacity
- **Hover**: Slightly darker opacity
- **Active Hover**: Darker blue (#1e5ad4)

### Interactions
- Click to toggle between options
- Smooth transitions (0.3s ease)
- Callback function on toggle
- State management with React hooks
- Default active option selection
