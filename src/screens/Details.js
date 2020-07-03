import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Details.css";

const Details = (props) => {
  let history = useHistory();
  const data = props.location.aboutProps;
  const [count, setCount] = useState(1);

  const GoBack = () => history.push("/");

  const LogMessage = () =>
    console.log(
      "%cProduit ajouté au panier",
      `color: lightgreen; font-weight: bold; font-size: 30px`
    );

  return (
    <div className="Details" style={{ backgroundColor: data.backgroundColor }}>
      <input type="button" value="<--" className="GoBack" onClick={GoBack} />
      <img
        src={require(`../images/${data.bigImage}.png`)}
        alt={data.name}
        className="Details-image"
      />
      <div className="Details-container">
        <div className="Details-infos">
          <h3 className="Details-title">{data.detailsTitle}</h3>
          <p className="Details-price">{data.price}</p>
        </div>
        <p className="Details-type">{data.type}</p>
        <p className="Details-description">{data.description}</p>
        <div className="Details-choice">
          <div className="Choice-color">
            {data.colors.map((color) => (
              <div
                tabIndex="0"
                className="Color"
                style={{ backgroundColor: color }}
                key={color}
              />
            ))}
          </div>
          <div className="Quantity-choice">
            <input
              type="button"
              className="Operator"
              value="-"
              onClick={() => (count > 1 ? setCount(count - 1) : null)}
            />
            <p className="Number">{count}</p>
            <input
              type="button"
              className="Operator"
              value="+"
              onClick={() => (count < 10 ? setCount(count + 1) : null)}
            />
          </div>
        </div>
        <div className="Details-Add" onClick={LogMessage}>
          <div className="ShoppingBasket-icone">o</div>
          <p className="AddToCart">Add to Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
