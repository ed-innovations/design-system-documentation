[Back](../README.md)
# Upload

The **Upload** component represents a file upload interface based on
a Figma design.

It is visually identical to the original design but refactored to be:

- Responsive
- Playground-friendly
- Easy to reuse or modify

---

## Overview

- Centered upload container layout
- Icon section for visual emphasis
- Primary and alternative action buttons
- Divider with "or" label for multiple action paths

This component is best suited for:
- File upload screens
- Document submission forms
- Receipt scanning interfaces
- Multi-option action flows

---

## Preview in Playground

![Upload component UI](../images/upload.png)

To render the Upload component locally, import it into the playground:

```tsx
import { Upload } from '../components'

export function Playground() {
  return <Upload />
}
```

---
## Code
```tsx
import React from 'react';
import './Upload.css';

const uploadIcon = "https://www.figma.com/api/mcp/asset/d8018a81-92f5-43c8-b6ce-c2b3dd5e1b0b";

const Upload: React.FC = () => {
  return (
    <div className="upload-wrapper">
      <div className="upload-container">
        <div className="upload-header">
          <h2 className="upload-title">Upload you receipt or type in your products manualy</h2>
        </div>

        <div className="upload-icon-section">
          <div className="upload-icon-container">
            <img src={uploadIcon} alt="Upload" className="upload-icon" />
          </div>
        </div>

        <div className="upload-actions">
          <button className="upload-button">Upload</button>

          <div className="upload-divider">
            <div className="divider-line"></div>
            <span className="divider-text">or</span>
            <div className="divider-line"></div>
          </div>

          <button className="upload-alternative">Type in Manually</button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
```

---
## Styling
```css
.upload-wrapper {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  background-color: #f3f5f8;
}

.upload-container {
  background-color: #ffffff;
  border: 2px solid #f3f5f8;
  border-radius: 10px;
  width: 100%;
  max-width: 840px;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}

.upload-header {
  width: 100%;
  text-align: left;
}

.upload-title {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.4;
  color: #000000;
  margin: 0;
  letter-spacing: -0.6px;
}

.upload-icon-section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.upload-icon-container {
  width: 88px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-icon {
  width: 100%;
  height: 100%;
  display: block;
}

.upload-actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
  max-width: 760px;
}

.upload-button {
  width: 100%;
  padding: 15px 30px;
  background-color: #2870ed;
  border: none;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.3;
  color: #ffffff;
  cursor: pointer;
  letter-spacing: -0.21px;
  transition: background-color 0.2s ease;
}

.upload-button:hover {
  background-color: #1d5ac9;
}

.upload-button:active {
  background-color: #155ab0;
}

.upload-divider {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  justify-content: center;
}

.divider-line {
  flex: 0 0 60px;
  height: 2px;
  background-color: #ced9e4;
  border-radius: 10px;
}

.divider-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 21px;
  line-height: 1.3;
  color: #ced9e4;
  letter-spacing: -0.21px;
}

.upload-alternative {
  padding: 0;
  background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.3;
  color: #9db2c8;
  cursor: pointer;
  letter-spacing: -0.21px;
  transition: color 0.2s ease;
}

.upload-alternative:hover {
  color: #7c99b6;
}
```
