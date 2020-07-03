import React from "react";
import { Link } from "react-router-dom";

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
      bigImage: "lounge-big",
      detailsTitle: "Lounge Chair",
      type: "Chairs",
      description:
        "Sed ut ipsi auctori huius disciplinae placet: constituam, quid aut officiis debitis aut. In quo enim ipsam voluptatem, quia dolor sit, a sapiente delectus, ut earum.",
      colors: ["#171c23", "#fc9090", "#8ed7a6"],
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
    <div className="Home">
      <h1 className="What-item-are-you-lo">What item are you looking for ?</h1>
      <Navbar className="Navbar" />
      <section className="Cards-container">
        {data.map((item, index) => {
          // console.log(item);
          if (index === 2) {
            return (
              <Link
                className="Card"
                to={{
                  pathname: "/details",
                  aboutProps: data[index],
                }}
                key={index}
              >
                <Card data={item} key={index} />
              </Link>
            );
          } else {
            return <Card data={item} key={index} />;
          }
        })}
      </section>
    </div>
  );
};

export default Home;
