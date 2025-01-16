import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/Movie.json";
import Cards from "./Cards";

const Movie = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const freeBooks = list.filter((data) => data.category === "free");

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-18 py-10">
      <h1 className="text-3xl font-bold py-4 text-center">Free Books Here</h1>
      <p className="text-xl text-center mb-6">
        Explore our collection of free books! Browse through our curated list
        and enjoy reading without any cost.
      </p>
      <div className="slider-container py-8">
        <Slider {...settings}>
          {freeBooks.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Movie;
