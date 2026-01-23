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
