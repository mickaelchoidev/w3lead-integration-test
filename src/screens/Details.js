import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Details.css";

const Details = (props) => {
  let history = useHistory();
  const data = props.location.aboutProps;
  const [count, setCount] = useState(1);
  const [black, setBlack] = useState(true);
  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false);

  const GoBack = () => history.push("/");

  const LogMessage = () =>
    console.log(
      "%cProduit ajouté au panier",
      `color: lightgreen; font-weight: bold; font-size: 30px`
    );

  return (
    <div className="Details" style={{ backgroundColor: data.backgroundColor }}>
      <input type="button" value="<-" className="GoBack" onClick={GoBack} />
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
            <div
              className={black ? "Color Chosen" : "Color"}
              style={{ backgroundColor: data.colors[0] }}
              onClick={() => {
                if (!black) {
                  setBlack(!black);
                  setRed(false);
                  setBlue(false);
                } else {
                  setBlack(true);
                }
              }}
            />
            <div
              className={red ? "Color Chosen" : "Color"}
              style={{ backgroundColor: data.colors[1] }}
              onClick={() => {
                if (!red) {
                  setRed(!red);
                  setBlack(false);
                  setBlue(false);
                } else {
                  setRed(true);
                }
              }}
            />
            <div
              className={blue ? "Color Chosen" : "Color"}
              style={{ backgroundColor: data.colors[2] }}
              onClick={() => {
                if (!blue) {
                  setBlue(!blue);
                  setBlack(false);
                  setRed(false);
                } else {
                  setBlue(true);
                }
              }}
            />
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
