import React from "react";

import "./Card.css";

const Card = ({ data }) => {
  console.log(data.image);
  return (
    <div
      className="Card-container"
      style={{ backgroundColor: data.backgroundColor }}
    >
      <img
        src={require(`../images/${data.image}.png`)}
        className="Card-image"
        alt={data.name}
      />
      <div className="Card-infos">
        <h3 className="Card-title">{data.name}</h3>
        <p className="Card-price" style={{ color: data.priceColor }}>
          {data.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
