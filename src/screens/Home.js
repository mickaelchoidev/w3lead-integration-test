import React from "react";

import Navbar from "../components/Navbar";
import Card from "../components/Card";

import "./Home.css";

const Home = () => {
  const data = [
    {
      name: "Roswell",
      image: "roswell",
      price: "$50",
      backgroundColor: "#dee6e1",
      priceColor: "#2c993b",
    },
    {
      name: "Minimal",
      image: "minimal",
      price: "$42",
      backgroundColor: "#e5e5e5",
      priceColor: "#3c3d3d",
    },
    {
      name: "Lounge",
      image: "lounge",
      price: "$35",
      backgroundColor: "#d9dcf7",
      priceColor: "#01205c",
    },
    {
      name: "Velvet",
      image: "velvet",
      price: "$53",
      backgroundColor: "#ebe6e4",
      priceColor: "#c35c5c",
    },
  ];

  return (
    <div className="Home-container">
      <h1 className="What-item-are-you-lo">What item are you looking for ?</h1>
      <Navbar />
      <section className="Cards-container">
        {data.map((item, index) => {
          console.log(item);
          return <Card data={item} key={index} />;
        })}
      </section>
    </div>
  );
};

export default Home;
