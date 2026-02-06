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
