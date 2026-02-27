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
