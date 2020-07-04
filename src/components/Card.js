import React from "react";

import "./Card.css";

const Card = ({ product }) => {
  return (
    <div
      className="Card-container"
      style={{ backgroundColor: product.backgroundColor }}
    >
      <img
        src={require(`../images/${product.image}.png`)}
        className="Card-image"
        alt={product.name}
      />
      <div className="Card-infos">
        <h3 className="Card-title">{product.name}</h3>
        <p className="Card-price" style={{ color: product.priceColor }}>
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
