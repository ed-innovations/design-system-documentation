[Back](../index.md)
# Login

The **Login** component represents a mobile-first login screen based on
a Figma design.

It is visually identical to the original design but refactored to be:

- Responsive
- Playground-friendly
- Easy to reuse or modify

---

## Overview

- Fixed-aspect “phone canvas” (375 × 812)
- Absolute positioning
- No external dependencies

This component is best suited for:
- Authentication screens
- Design prototypes
---

## Preview in Playground
![Login component UI](../images/login.png)

To render the Login component locally, import it into the playground:

```tsx
import { Login } from '../components'

export function Playground() {
  return <Login />
}
```
## Code
```tsx
import React from 'react';
import './Login.css';

const imgRectangle363 = "https://www.figma.com/api/mcp/asset/a155007c-606c-4735-bd6d-6253013e843a";
const imgIcons = "https://www.figma.com/api/mcp/asset/f3974a94-3373-412c-96b6-4663a33e13d2";
const imgGoogle = "https://www.figma.com/api/mcp/asset/dd7bf778-d98e-4e30-afca-14af4bbe083e";
const imgIcons1 = "https://www.figma.com/api/mcp/asset/94ffdd51-68c8-4dc2-926c-d0d3d0bf6a0b";
const imgTwitter = "https://www.figma.com/api/mcp/asset/1bb9cd52-0b81-44e6-9cb1-f8b387be42bf";

const Login: React.FC = () => {
    return (
        <div className="login">
            <div className="login-header">
                <img className="back-icon" src={imgIcons} alt="back" />
            </div>
            <img className="background-image" src={imgRectangle363} alt="background" />
            <h1 className="login-title">Login</h1>
            <form className="login-form">
                <div className="input-field email-field">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-field password-field">
                    <input type="password" placeholder="Password" />
                </div>
                <button className="login-button" type="submit">
                    <span className="login-button-text">Login</span>
                </button>
            </form>
            <div className="social-login">
                <img className="social-icon" src={imgGoogle} alt="Google" />
                <img className="social-icon" src={imgIcons1} alt="icon" />
                <img className="social-icon" src={imgTwitter} alt="Twitter" />
            </div>
            <div className="text-block">
                <div className="divider"></div>
            </div>
        </div>
    );
};

export default Login;
```

## CSS
```css
/* --- Playground-safe centering --- */
.login-wrapper {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 24px;
}

/* --- Phone canvas --- */
.login {
    position: relative;
    width: 100%;
    max-width: 375px;
    aspect-ratio: 375 / 812;
    margin-left: auto;
    margin-right: auto;
    background-color: #efeff4;
    border-radius: 20px;
    overflow: hidden;

    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

/* --- Header --- */
.login-header {
    position: absolute;
    top: 0;
    left: 0;
    height: 88px;
    width: 100%;
    background-color: #efeff4;
}

.back-icon {
    position: absolute;
    left: 16px;
    top: 32px;
    width: 24px;
    height: 24px;
}

/* --- Background image --- */
.background-image {
    position: absolute;
    top: 128px;
    left: 0;
    width: 100%;
    height: 684px;
    object-fit: cover;
}

/* --- Title --- */
.login-title {
    position: absolute;
    top: 152px;
    left: 24px;
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    color: #343434;
}

/* --- Form --- */
.login-form {
    position: relative;
}

.input-field {
    position: absolute;
    left: 24px;
    width: calc(100% - 48px);
    height: 64px;
    border: 1px solid #cecece;
    border-radius: 8px;
    box-sizing: border-box;
    background: white;
}

.input-field input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    background: transparent;
    border-radius: 8px;
}

.email-field {
    top: 224px;
}

.password-field {
    top: 304px;
}

/* --- Button --- */
.login-button {
    position: absolute;
    top: 400px;
    left: 24px;
    width: calc(100% - 48px);
    padding: 17px 10px;
    background-color: #2870ed;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
}

.login-button-text {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: white;
}

/* --- Social login --- */
.social-login {
    position: absolute;
    top: 558px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 64px;
}

.social-icon {
    width: 32px;
    height: 32px;
}

/* --- Bottom block --- */
.text-block {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 24px;
    background-color: white;

    display: flex;
    justify-content: center;
}

.divider {
    width: 190px;
    height: 10px;
    background-color: #efeff4;
    border-radius: 10px;
}
```