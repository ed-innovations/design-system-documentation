[Back](../README.md)
# Header Banner

The **Header Banner** component is a versatile hero section with navigation, featuring a sticky header, responsive design, and customizable content sections.

It is designed to be:

- Fully responsive across all device sizes
- Easy to customize with props
- Feature-rich with navigation and CTA button

---

## Overview

- Sticky navigation header
- Responsive hero section with heading and description
- Features grid that adapts to screen size
- Built-in call-to-action button
- Mobile-optimized layout

This component is best suited for:
- Landing pages
- Marketing sites
- Product showcase pages

---

## Preview in Playground
![Header Banner component  UI](../images/HeaderBanner.png)

To render the Header Banner component locally, import it into the playground:

```tsx
import { HeaderBanner } from '../components'

export function Playground() {
  return <HeaderBanner />
}
```

## Code

```tsx
import React from 'react';
import './HeaderBanner.css';

interface HeaderBannerProps {
  onNavigate?: (section: string) => void;
  onGetStartedClick?: () => void;
  heading?: string;
  subheading?: string;
  description?: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({
                                                     onNavigate,
                                                     onGetStartedClick,
                                                     heading = 'Decisions Today, Wealth Tomorrow',
                                                     subheading = 'Company',
                                                     description = 'Fanless design means MacBook Air stays completely silent no matter how intense the task',
                                                     features = [
                                                       {
                                                         title: 'Feature 1',
                                                         description: 'All-new strikingly thin design so you can work, play, or create',
                                                       },
                                                       {
                                                         title: 'Feature 1',
                                                         description: 'All-new strikingly thin design so you can work, play, or create',
                                                       },
                                                       {
                                                         title: 'Feature 1',
                                                         description: 'All-new strikingly thin design so you can work, play, or create',
                                                       },
                                                     ],
                                                   }) => {
  const navItems = ['About', 'Portfolio', 'Services', 'Contacts'];

  const handleNavigate = (section: string) => {
    onNavigate?.(section);
  };

  const handleGetStarted = () => {
    onGetStartedClick?.();
  };

  return (
      <div className="header-banner-wrapper">
        {/* Hero Section */}
        <section className="header-banner-hero">
          {/* Header Navigation (now part of the hero) */}
          <header className="header-banner-header">
            <div className="header-banner-container">
              <div className="header-banner-logo">{subheading}</div>
              <nav className="header-banner-nav">
                {navItems.map((item) => (
                    <button
                        key={item}
                        className="header-banner-nav-item"
                        onClick={() => handleNavigate(item)}
                    >
                      {item}
                    </button>
                ))}
              </nav>
              <button className="header-banner-cta-btn" onClick={handleGetStarted}>
                Get Started
              </button>
            </div>
          </header>

          <div className="header-banner-hero-content">
            <h1 className="header-banner-heading">{heading}</h1>
            <p className="header-banner-description">{description}</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="header-banner-features">
          <div className="header-banner-features-container">
            {features.map((feature, index) => (
                <div key={index} className="header-banner-feature-card">
                  <h3 className="header-banner-feature-title">{feature.title}</h3>
                  <p className="header-banner-feature-description">
                    {feature.description}
                  </p>
                </div>
            ))}
          </div>
        </section>
      </div>
  );
};

export default HeaderBanner;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | 'Decisions Today, Wealth Tomorrow' | Main heading text |
| `subheading` | `string` | 'Company' | Subheading/logo text |
| `description` | `string` | 'Fanless design means MacBook Air stays completely silent no matter how intense the task' | Description text under heading |
| `features` | `Array<{title: string; description: string}>` | 3 default features | Array of feature cards to display |
| `onNavigate` | `(section: string) => void` | - | Callback when navigation items are clicked |
| `onGetStartedClick` | `() => void` | - | Callback when CTA button is clicked |

## Responsive Design

The Header Banner component is fully responsive:

- **Desktop**: Full navigation menu, large heading with responsive sizing
- **Tablet (≤768px)**: Navigation wraps below logo and CTA button
- **Mobile (≤480px)**: Optimized spacing and font sizes for smaller screens
