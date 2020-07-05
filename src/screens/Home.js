import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import data from "../data/Data.json";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

import "./Home.css";

const pageVariants = {
  initial: { x: "-100vw" },
  in: { x: 0 },
  out: { x: "-100vw" },
};
const pageTransition = {
  transition: "linear",
  duration: 0.5,
};

const Home = () => {
  const newData = [...data];
  const ListChairs = newData[0].listProducts;

  return (
    <motion.div
      className="Home"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 className="What-item-are-you-lo">What item are you looking for ?</h1>

      <Navbar className="Navbar" productsList={newData} />

      <section className="Cards-container">
        {ListChairs.map((item, index) => {
          if (index === 2) {
            return (
              <Link
                className="Card"
                to={{
                  pathname: "/details",
                  aboutProps: ListChairs[index],
                }}
                key={index}
              >
                <Card product={item} key={index} />
              </Link>
            );
          } else {
            return <Card product={item} key={index} />;
          }
        })}
      </section>
    </motion.div>
  );
};

export default Home;
