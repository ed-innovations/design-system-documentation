import React, { useState } from 'react';
import './Listing.css';

const imgProductIcon = "https://www.figma.com/api/mcp/asset/39987c69-99f0-4f6e-865d-ef27ded79a99";
const imgHeartIcon = "https://www.figma.com/api/mcp/asset/8bf8720a-c26f-41ea-ac50-cdb25cfca973";

interface ListingProps {
  price?: string;
  title?: string;
  description?: string;
  onAddToCart?: () => void;
  onFavorite?: () => void;
}

const Listing: React.FC<ListingProps> = ({
                                           price = "€329",
                                           title = "Product Title",
                                           description = "Product Description",
                                           onAddToCart = () => {},
                                           onFavorite = () => {},
                                         }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    onFavorite();
  };

  return (
      <div className={"listing-wrapper"}>
        <div className="listing-card">
          <div className="listing-content">
            <div className="product-image-section">
              <div className="product-image-placeholder">
                <img className="product-icon" src={imgProductIcon} alt="Product" />
              </div>

              <div className="product-info">
                <div className="product-details">
                  <h4 className="product-title">{title}</h4>
                  <p className="product-description">{description}</p>
                </div>

                <button
                    className={`favorite-button ${isFavorited ? 'favorited' : ''}`}
                    onClick={handleFavoriteClick}
                    aria-label="Add to favorites"
                >
                  <img src={imgHeartIcon} alt="Favorite" />
                </button>
              </div>
            </div>

            <div className="listing-footer">
              <span className="price">{price}</span>
              <button className="add-to-cart-button" onClick={onAddToCart}>
                <span className="button-text">button</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Listing;
