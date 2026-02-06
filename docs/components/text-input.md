[Back](../README.md)
# TextInput

The **TextInput** component represents a customizable text input field with action buttons and submit functionality based on a Figma design.

It is visually identical to the original design but refactored to be:

- Responsive
- Playground-friendly
- Easy to reuse or modify

---

## Overview

- Responsive input field with flexible width
- Multiple action buttons
- Send button with icon
- Focus and hover states for better UX
- Customizable placeholder text and callbacks

This component is best suited for:
- Chat interfaces
- Message input forms
- Search bars with quick actions
- Text submission forms

---

## Preview in Playground

![Text input UI](../images/TextInput.png)

To render the TextInput component locally, import it into the playground:

```tsx
import { TextInput } from '../components'

export function Playground() {
  return <TextInput />
}
```

---

## Code

```tsx
import React, { useState } from 'react';
import './TextInput.css';

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
  onActionButtonClick?: (buttonIndex: number) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder = 'Type in any message',
  value = '',
  onChange,
  onSubmit,
  onActionButtonClick,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit?.();
    }
  };

  const handleActionButton = (index: number) => {
    onActionButtonClick?.(index);
  };

  const handleSendClick = () => {
    onSubmit?.();
  };

  return (
    <div className="textinput-wrapper">
      <div className="textinput-container">
        <div className="textinput-bg" />
        <div className="textinput-content">
          <input
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="textinput-field"
          />
          <div className="textinput-actions">
            <button
              className="textinput-action-btn"
              onClick={() => handleActionButton(0)}
              title="Action 1"
              aria-label="Action button 1"
            />
            <button
              className="textinput-action-btn"
              onClick={() => handleActionButton(1)}
              title="Action 2"
              aria-label="Action button 2"
            />
            <button
              className="textinput-action-btn"
              onClick={() => handleActionButton(2)}
              title="Action 3"
              aria-label="Action button 3"
            />
            <button
              className="textinput-action-btn"
              onClick={() => handleActionButton(3)}
              title="Action 4"
              aria-label="Action button 4"
            />
            <button
              className="textinput-send-btn"
              onClick={handleSendClick}
              title="Send message"
              aria-label="Send message"
            >
              <svg
                className="textinput-send-icon"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
```

---

## CSS

```css
.textinput-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.textinput-container {
  position: relative;
  width: clamp(60%, 70vw, 900px);
}

.textinput-bg {
  position: absolute;
  inset: 0;
  background-color: #f3f5f8;
  border-radius: 10px;
  z-index: 0;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

.textinput-content {
  position: relative;
  z-index: 1;
  padding: clamp(16px, 3vw, 24px) clamp(16px, 3vw, 24px);
  display: flex;
  align-items: center;
  gap: 12px;
}

.textinput-field {
  width: 100%;
  min-height: 2.5rem;
  padding: 0;
  background-color: transparent;
  border: none;
  border-radius: 0;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: #333333;
  letter-spacing: -0.16px;
  box-sizing: border-box;
  transition: color 0.3s ease;
}

.textinput-field::placeholder {
  color: #9fa4bc;
  font-weight: 400;
}

.textinput-field:focus {
  outline: none;
  color: #333333;
}

.textinput-field:focus::placeholder {
  color: transparent;
}

.textinput-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.textinput-action-btn {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 3px;
  background-color: #d0e0fb;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  flex-shrink: 0;
  padding: 0;
}

.textinput-action-btn:hover {
  background-color: #b8d0f7;
  transform: scale(1.05);
}

.textinput-action-btn:active {
  background-color: #a0c4f5;
  transform: scale(0.95);
}

.textinput-action-btn:focus {
  outline: 2px solid #2870ed;
  outline-offset: 2px;
}

.textinput-send-btn {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 3px;
  background-color: #2870ed;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, transform 0.2s ease;
  flex-shrink: 0;
  padding: 0;
}

.textinput-send-btn:hover {
  background-color: #1e5bb3;
  transform: scale(1.05);
}

.textinput-send-btn:active {
  background-color: #154294;
  transform: scale(0.95);
}

.textinput-send-btn:focus {
  outline: 2px solid #2870ed;
  outline-offset: 2px;
}

.textinput-send-icon {
  display: block;
  color: white;
}
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | `'Type in any message'` | Placeholder text for the input field |
| `value` | `string` | `''` | Current value of the input field |
| `onChange` | `(value: string) => void` | - | Callback when input value changes |
| `onSubmit` | `() => void` | - | Callback when send button is clicked or Enter is pressed |
| `onActionButtonClick` | `(buttonIndex: number) => void` | - | Callback for action button clicks (0-3) |
