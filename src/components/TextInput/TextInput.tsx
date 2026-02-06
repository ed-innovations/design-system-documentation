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
