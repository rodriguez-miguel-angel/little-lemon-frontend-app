import '../../App.css';
import './Main.css';

import React from "react";

import HighlightCard from './HighlightCard'

const specials = [
  {
    title: "Greek Salad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    price: 14.99,
    getImageSrc: () => require("../../images/greek-salad.svg"),
  },
  {
    title: "Bruchetta",
    description:
      "Veniam dolorum quisquam error, ab aliquid fugit velit soluta odit obcaecati optio.",
    price: 12.99,
    getImageSrc: () => require("../../images/bruchetta.svg"),
  },
  {
    title: "Lemon Dessert",
    description:
      "Accusantium ipsum unde perferendis facilis, facere tempore ducimus vero laborum.",
    price: 10.99,
    getImageSrc: () => require("../../images/lemon-dessert.svg"),
  },
];


const Highlights = () => {
  return (
    <>
      <section className='Highlights'>
        <h1 className='section-title'>{"Specials"}</h1>
        <button className='button call-to-action'>{"Order Items"}</button>
        {specials.map((special) => (
          <HighlightCard
            key={special.title}
            title={special.title}
            description={special.description}
            price={special.price}
            imageSrc={special.getImageSrc()}
          />
        ))}
      </section>
    </>
  );
}

export default Highlights;