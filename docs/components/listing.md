[Back](../README.md)
# Listing

The **Listing** component represents a product listing card with an image,
product details, price, and purchase options based on a Figma design.

It is visually identical to the original design but refactored to be:

- Responsive
- Playground-friendly
- Easy to reuse or modify

---

## Overview

- Flexible product card layout
- Interactive favorite button with state management
- Add to cart functionality
- Customizable product information

This component is best suited for:
- E-commerce product displays
- Shopping cart interfaces
- Product catalog views
- Marketplace listings

---

## Preview in Playground

![Listing component UI](../images/listing.png)

To render the Listing component locally, import it into the playground:

```tsx
import { Listing } from '../components'

export function Playground() {
  return (
    <Listing
      price="€329"
      title="Product Title"
      description="Product Description"
      onAddToCart={() => console.log('Added to cart')}
      onFavorite={() => console.log('Favorited')}
    />
  )
}
```

---
## Code
```tsx
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
```

---
## CSS
```css
.listing-card {
  width: 100%;
  max-width: 200px;

  background-color: white;
  border-radius: 12px;
  overflow: hidden;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* --- Playground-safe centering --- */
.listing-wrapper {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

/* --- Listing Content --- */
.listing-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 300px;
}

/* --- Product Image Section --- */
.product-image-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

/* --- Product Image Placeholder --- */
.product-image-placeholder {
  background-color: #e4eaf0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 120px;
}

.product-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

/* --- Product Info Row --- */
.product-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
}


/* --- Favorite Button --- */
.favorite-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.favorite-button:hover {
  transform: scale(1.1);
}

.favorite-button.favorited img {
  filter: brightness(0) saturate(100%) invert(23%) sepia(77%) saturate(1169%) hue-rotate(343deg) brightness(105%) contrast(103%);
}

.favorite-button img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* --- Listing Footer --- */
.listing-footer {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}

/* --- Price --- */
.price {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: #343434;
  white-space: nowrap;
}

/* --- Add to Cart Button --- */
.add-to-cart-button {
  background-color: #2870ed;
  border: none;
  border-radius: 4px;
  padding: 7.5px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 96px;
  transition: background-color 0.2s ease;
}

.add-to-cart-button:hover {
  background-color: #1f5ac0;
}

.add-to-cart-button:active {
  background-color: #1a4a99;
}

.button-text {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  color: white;
  text-transform: capitalize;
}

/* --- Product Title --- */
.product-title {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  color: #7c99b6;
  margin: 0;

  max-width: 114px;
}

/* --- Product Description --- */
.product-description {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  color: #9db2c8;
  margin: 0;

  max-width: 160px;
}
```
