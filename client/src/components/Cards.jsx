import React from "react";
import Book from "../../public/Book.png";

const Cards = ({ item }) => {
  const { name, cast, price, category } = item;

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-white dark:text-slate-600 p-8">
        {/* Image */}
        <figure>
          <img src={Book} alt={name} className="w-full h-60 object-cover" />
        </figure>

        {/* Card Content */}
        <div className="card-body">
          {/* Title */}
          <h2 className="card-title text-lg font-bold">
            {name}
            {category === "free" && (
              <div className="badge badge-secondary ml-2">FREE</div>
            )}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-600">Cast: {cast}</p>

          {/* Price */}
          <p className="text-lg font-semibold text-blue-600">
            Price: {price === "0" ? "Free" : `$${price}`}
          </p>

          {/* Tags */}
          <div className="card-actions justify-end">
            <div className="badge badge-outline capitalize hover:bg-blue-600 text-white p-2">
              {category}
            </div>
            <div className=" badge badge-outline bg-white text-black  hover:bg-blue-600 hover:text-white hover:outline-none cursor-pointer ">
              Movie
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
