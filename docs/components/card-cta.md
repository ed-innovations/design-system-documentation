[Back](../README.md)
# Card-CTA

The **Card-CTA** component represents a call-to-action card for displaying cryptocurrency portfolio information with a chart visualization and an action button based on a Figma design.

It is visually identical to the original design but refactored to be:

- Responsive
- Playground-friendly
- Easy to reuse or modify

---

## Overview

- Portfolio value display with large typography
- Chart visualization area
- Call-to-action footer with "Learn more" button
- Interactive button with hover and active states

This component is best suited for:
- Financial dashboards
- Portfolio displays
- Cryptocurrency tracking
- Data visualization cards
- Call-to-action sections

---

## Preview in Playground

![Card-CTA component UI](../images/card-cta.png)

To render the Card-CTA component locally, import it into the playground:

```tsx
import { CardCTA } from '../components'

export function Playground() {
  return <CardCTA />
}
```

---
## Code
```tsx
import React from 'react';
import './Card-CTA.css';

const chartImg =
    'https://www.figma.com/api/mcp/asset/e8841247-a015-46d9-bc34-658e59f45c56';
const arrowImg =
    'https://www.figma.com/api/mcp/asset/9b3dcbdd-9289-4964-8800-aba59ea552d5';

const CardCTA: React.FC = () => {
  return (
      <div className="card-cta-wrapper">
        <div className="card-cta">

          {/* TOP CARD */}
          <div className="card-cta-main">
            <p className="card-cta-title">Crypto portfolio</p>

            <div className="card-cta-chart">
              <img src={chartImg} alt="chart" />

              <span className="card-cta-value">
                56$
              </span>
            </div>

          </div>

          {/* BOTTOM CARD */}
          <div className="card-cta-footer">
            <span className="card-cta-button-text">Learn more</span>

            <button className="card-cta-button">
              <img src={arrowImg} alt="arrow" />
            </button>
          </div>

        </div>
      </div>
  );
};

export default CardCTA;
```

---

## Styling

The component uses CSS for styling with a clean, modern design:

- **Color Scheme**: Light background (#f3f5f8) with dark text (#12293b)
- **Typography**: Inter font family with 500-600 font weights
- **Button**: Blue primary color (#2870ed) with hover and active states
- **Spacing**: Consistent 8px-24px gap patterns
- **Border Radius**: 12px for cards, 6px for button

---

## Customization

To customize this component, modify the following:

- **Title**: Change the text in `.card-cta-title`
- **Value**: Update the value in `.card-cta-value` (e.g., "56$")
- **Chart Image**: Replace `chartImg` URL with your own chart
- **Button Image**: Replace `arrowImg` URL with your own icon
- **Colors**: Update CSS variables in `Card-CTA.css`
