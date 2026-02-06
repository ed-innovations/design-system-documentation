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
