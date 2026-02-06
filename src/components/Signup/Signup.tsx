import React, { useState } from 'react';
import './Signup.css';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up:', { email, password });
  };

  return (
      <div className="signup-wrapper">
        <div className="signup-container">
          <div className="signup-bg" />

          <div className="signup-content">
            <h1 className="signup-title">Sign up</h1>

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="signup-input-group">
                <input
                    type="email"
                    placeholder="Enter your e-mail address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="signup-input-field"
                    required
                />
              </div>

              <div className="signup-input-group">
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="signup-input-field"
                    required
                />
              </div>

              <button type="submit" className="signup-button">
                Get Started
              </button>
            </form>

            <p className="signup-disclaimer">
              By entering your e-mail address you confirming that you're agree with our{' '}
              <a href="#" className="terms-link">Terms of Service</a>.
            </p>
          </div>
        </div>
      </div>
  );
};

export default Signup;
