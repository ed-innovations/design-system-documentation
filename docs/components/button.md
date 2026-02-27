[Back](../README.md)
# Button

The **Button** component is a primary action button with a clean, modern design
based on a Figma design system. It features a bright blue background with white text
and is optimized for desktop and mobile interactions.

It is visually identical to the original design but refactored to be:

- Responsive
- Playground-friendly
- Easy to reuse or modify
- Accessible with proper semantic HTML

---

## Overview

- Large, prominent call-to-action button
- Smooth hover and active state transitions
- Customizable label text
- Consistent with ERSTE design system colors

This component is best suited for:
- Primary action buttons
- Form submissions
- Call-to-action elements
- Main navigation actions

---

## Preview in Playground

![Button component UI](../images/button.png)

To render the Button component locally, import it into the playground:

```tsx
import { Button } from '../components'

export function Playground() {
  return (
    <Button
      label="button"
      onClick={() => console.log('Button clicked')}
    />
  )
}
```

---
## Code
```tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label = "button",
  onClick = () => {},
}) => {
  return (
    <div className="button-wrapper">
      <button 
        className="button-large" 
        onClick={onClick}
        data-name="size=large, icon=no icon, state=active, dark=false, desktop=false"
      >
        <span className="button-text">{label}</span>
      </button>
    </div>
  );
};

export default Button;
```

---
## CSS
```css
/* --- Playground-safe centering --- */
.button-wrapper {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

/* --- Button Styles --- */
.button-large {
  width: 327px;
  padding: 17px 10px;
  
  background-color: #2870ED;
  border: none;
  border-radius: 8px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.button-large:hover {
  background-color: #1e5ad4;
}

.button-large:active {
  background-color: #1a4ab8;
}

.button-text {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  color: #FFFFFF;
  white-space: nowrap;
  text-align: center;
}
```

---

## Design Details

### Color Palette
- **Background**: #2870ED (ERSTE Bright Blue)
- **Text**: #FFFFFF (White)
- **Hover**: #1e5ad4 (Darker blue)
- **Active**: #1a4ab8 (Darkest blue)

### Typography
- **Font Family**: Inter
- **Font Weight**: Bold (700)
- **Font Size**: 20px
- **Line Height**: 1.4

### Dimensions
- **Width**: 327px
- **Padding**: 17px (vertical) × 10px (horizontal)
- **Border Radius**: 8px

### Interactions
- Hover state with darker blue background
- Active state with even darker blue background
- Smooth transitions (0.2s ease)
