import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

// icons
import { MdArrowBack } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdShoppingBasket } from "react-icons/md";

import "./Details.css";

const pageVariants = {
  initial: { x: "100vw" },
  in: { x: 0 },
  out: { x: "100vw" },
};
const pageTransition = {
  transition: "linear",
  duration: 0.5,
};

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
    <motion.div
      className="Details"
      style={{ backgroundColor: data.backgroundColor }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <button className="GoBack" onClick={GoBack}>
        <MdArrowBack color={data.priceColor} size="25px" opacity="0.46" />
      </button>
      <img
        src={require(`../images/${data.bigImage}.png`)}
        alt={data.name}
        className="Details-image"
      />

      <div className="Details-container">
        <div className="Details-infos">
          <h3 className="Details-title">{data.detailsTitle}</h3>
          <p className="Details-price" style={{ color: data.priceColor }}>
            {data.price}
          </p>
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
            <button
              className="Operator"
              onClick={() => (count > 1 ? setCount(count - 1) : null)}
            >
              <MdRemove color={data.priceColor} size="20px" opacity="0.46" />
            </button>
            <p className="Number">{count}</p>
            <button
              className="Operator"
              onClick={() => (count < 10 ? setCount(count + 1) : null)}
            >
              <MdAdd color={data.priceColor} size="20px" opacity="0.46" />
            </button>
          </div>
        </div>

        <div className="Details-Add">
          <button onClick={LogMessage} className="Details-AddButton">
            <MdShoppingBasket
              color={data.priceColor}
              size="20px"
              opacity="0.46"
              className="ShoppingBasket-icon"
            />
            <p className="AddToCart" style={{ color: data.priceColor }}>
              Add to Cart
            </p>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Details;
