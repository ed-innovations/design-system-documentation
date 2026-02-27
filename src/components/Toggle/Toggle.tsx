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
