[Back](../index.md)
# Card-lg

The **Card-lg** component represents a premium pricing/plan card with a title,
pricing information, icon, and feature list based on a Figma design.

It is visually identical to the original design but refactored to be:

- Responsive
- Playground-friendly
- Easy to reuse or modify

---

## Overview

- Flexible premium card layout
- Pricing display with amount and billing period
- Feature list with icons
- Icon-based visual emphasis

This component is best suited for:
- Pricing plans
- Premium feature showcases
- Subscription options
- Service tier displays

---

## Preview in Playground

![Card-lg component UI](../images/card-lg.png)

To render the Card-lg component locally, import it into the playground:

```tsx
import { CardLg } from '../components'

export function Playground() {
  return <CardLg />
}
```

---
## Code
```tsx
import React from 'react';
import './Card-lg.css';

const img = "https://www.figma.com/api/mcp/asset/1282f9f3-d001-44ba-accc-a322d625fe89";
const img1 = "https://www.figma.com/api/mcp/asset/9186a269-0243-42aa-9194-736fff30db36";

const CardLg: React.FC = () => {
  return (
      <div className="card-lg">
        <div className="top-row">
          <div className="left-section">
            <div className="price-section">
              <div className="title-text">Premium Plan</div>

              <div className="price">
                <div className="price-row">
                  <span className="price-amount">€1499/</span>
                  <span className="price-period">Year</span>
                </div>
              </div>
            </div>

            <div className="subtitle-text">
              Lorem ipsum dolor sit amet, consectetur
            </div>
          </div>

          <div className="icon-container">
            <div className="icon">
              <div className="icon-img">
                <div className="icon-inner">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="features">
          <div className="feature">
            <div className="feature-icon">
              <div className="feature-icon-inner">
                <img src={img1} alt="" />
              </div>
            </div>
            <p className="feature-text">Lorem ipsum dolor sit amet</p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <div className="feature-icon-inner">
                <img src={img1} alt="" />
              </div>
            </div>
            <p className="feature-text">Consectetur adipiscing elit</p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <div className="feature-icon-inner">
                <img src={img1} alt="" />
              </div>
            </div>
            <p className="feature-text">Sed do eiusmod tempor</p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <div className="feature-icon-inner">
                <img src={img1} alt="" />
              </div>
            </div>
            <p className="feature-text">Incididunt ut labore</p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <div className="feature-icon-inner">
                <img src={img1} alt="" />
              </div>
            </div>
            <p className="feature-text">Et dolore magna aliqua</p>
          </div>
        </div>
      </div>
  );
};

export default CardLg;
```

---
## CSS
```css
.card-lg {
  position: relative;
  width: 100%;
  max-width: 279px;
}


.card-lg-wrapper {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.top-row {
  display: flex;
  gap: 6px;
  align-items: flex-start;

  width: 100%;
  max-width: 279px;

  position: relative;
  flex-shrink: 0;
}


.left-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
  max-width: 217px;

  position: relative;
  flex-shrink: 1;
}


.price-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
  max-width: 232px;

  position: relative;
  flex-shrink: 1;
}


.title-bar {
  height: 14px;
  width: 90px;
  background-color: #bdccdb;
  border-radius: 10px;
  position: relative;
  flex-shrink: 0;
}

.price {
  display: inline-grid;
  grid-template-columns: max-content;
  grid-template-rows: max-content;
  align-items: start;
  justify-items: start;
  line-height: 0;
  position: relative;
  flex-shrink: 0;
}

.price-row {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  gap: 6px;
  align-items: flex-end;
  margin-left: 0;
  margin-top: 0;
  font-style: normal;
  color: #000000;
  text-align: center;
  position: relative;
}

.price-amount {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  position: relative;
  flex-shrink: 0;
}

.price-period {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  position: relative;
  flex-shrink: 0;
}

.bottom-bar {
  height: 10px;
  width: 100%;
  background-color: #ced9e4;
  border-radius: 10px;
  position: relative;
  flex-shrink: 0;
}

.icon-container {
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  padding: 14.778px;
  border-radius: 56px;
  position: relative;
  flex-shrink: 0;
}

.icon {
  display: flex;
  align-items: flex-start;
  position: relative;
  flex-shrink: 0;
}

.icon-img {
  overflow: hidden;
  position: relative;
  width: 29.128px;
  height: 29.128px;
}

.icon-inner {
  position: absolute;
  height: 17.609px;
  left: 2.2px;
  top: 4.41px;
  width: 22.015px;
}

.icon-inner img {
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 16px;

  align-items: flex-start;
  position: relative;

  width: 100%;
}


.feature {
  display: flex;
  gap: 12px;
  align-items: center;

  width: 100%;
  max-width: 279px;

  position: relative;
  flex-shrink: 0;
}


.feature-icon {
  overflow: hidden;
  position: relative;
  width: 24px;
  height: 24px;
}

.feature-icon-inner {
  position: absolute;
  bottom: 29.17%;
  left: 16.67%;
  right: 16.67%;
  top: 25%;
}

.feature-icon-inner img {
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
}

.feature-bar {
  height: 10px;
  background-color: #ced9e4;
  border-radius: 10px;

  max-width: 100%;
  position: relative;
  flex-shrink: 0;
}
```
