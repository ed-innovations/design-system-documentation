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