[Back](../README.md)
# Sign up

The **Sign up** component represents a mobile-first sign up screen for user registration.

It is visually identical to the original design but refactored to be:

- Responsive
- Playground-friendly
- Easy to reuse or modify

---

## Overview

- Full viewport height layout
- Responsive padding and sizing
- Clean form interface with email and password inputs
- Call-to-action button
- Terms of Service disclaimer

This component is best suited for:
- User registration flows
- Onboarding screens
- Authentication pages

---

## Preview in Playground

To render the Sign up component locally, import it into the playground:
![Signup UI](../images/Signup.png)

```tsx
import { Signup } from '../components'

export function Playground() {
  return <Signup />
}
```

## Code

```tsx
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
```

## Styling

The component uses CSS utilities for responsive design:

```css
.signup-wrapper {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  background-color: #ffffff;
  text-align: left;
}

.signup-container {
  position: relative;
  width: 100%;
  max-width: 510px;
  height: auto;
}

.signup-bg {
  position: absolute;
  inset: 0;
  background-color: #f3f5f8;
  border-radius: 10px;
  z-index: 0;
}

.signup-content {
  position: relative;
  z-index: 1;
  padding: clamp(28px, 6vw, 58px) clamp(24px, 6vw, 60px)
  clamp(22px, 4vw, 30px) clamp(24px, 6vw, 58px);
  height: auto;
  display: flex;
  flex-direction: column;
}

.signup-title {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: clamp(24px, 4.5vw, 30px);
  line-height: 1.4;
  color: #333333;
  margin: 0 0 24px 0;
  letter-spacing: -0.6px;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
}

.signup-input-group {
  display: flex;
  position: static;
  width: 100%;
}

.signup-input-field {
  width: 100%;
  min-height: 4.375rem;
  padding: 1.5rem 1.75rem;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.4;
  color: #333333;
  letter-spacing: -0.16px;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

.signup-input-field::placeholder {
  color: #9fa4bc;
  font-weight: 400;
}

.signup-input-field:focus {
  outline: none;
  background-color: #ffffff;
  box-shadow: 0 0 0 2px #2870ed;
}

.signup-button {
  width: 100%;
  min-height: 4.8125rem;
  padding: 1.1875rem 1.25rem;
  background-color: #2870ed;
  border: none;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: clamp(18px, 3.2vw, 21px);
}
```

## Features

- **Form State Management**: Uses React hooks to manage email and password input states
- **Responsive Design**: Uses CSS `clamp()` for fluid scaling across devices
- **Accessible**: Proper input types and form validation attributes
- **Themed**: Consistent color scheme with blue primary action button
