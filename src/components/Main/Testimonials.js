import '../../App.css';
import './Main.css';


import TestimonialCard from './TestimonialCard';

const reviews = [
  {
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    rating: 4,
    getImageSrc: () => require("../../images/greek-salad.svg"),
  },
  {
    name: "Jane Doe",
    description:
      "Veniam dolorum quisquam error, ab aliquid fugit velit soluta odit obcaecati optio.",
    rating: 3,
    getImageSrc: () => require("../../images/bruchetta.svg"),
  },
  {
  name: "Juan Doe",
    description:
      "Accusantium ipsum unde perferendis facilis, facere tempore ducimus vero laborum.",
    rating: 4,
    getImageSrc: () => require("../../images/lemon-dessert.svg"),
  },
  {
  name: "Juanita Doe",
    description:
      "Accusantium ipsum unde perferendis facilis, facere tempore ducimus vero laborum.",
    rating: 4,
    getImageSrc: () => require("../../images/lemon-dessert.svg"),
  },
];

function Testimonials() {
  return (
    <>
      <section className='Testimonials'>
        <h1 className='section-title'>{"Testimonials"}</h1>
        {reviews.map((review) => (
          <TestimonialCard
            key={review.name}
            name={review.name}
            description={review.description}
            rating={review.rating}
            imageSrc={review.getImageSrc()}
          />
        ))}
      </section>
    </>
  );
}

export default Testimonials;