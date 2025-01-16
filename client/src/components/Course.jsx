import React from "react";
import list from "../../public/Movie.json";
import Cards from "./Cards";
import { NavLink } from "react-router-dom";

const Courses = () => {
  return (
    <div className="max-w-screen-2xl mx-auto md:px-18 px-4 dark:bg-white dark:text-slate-600">
      <div className="mt-28 justify-center items-center text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Here are All Paid Books
          <span className="text-2xl md:text-4xl font-semibold text-purple-400">
            {" "}
            Here!:)
          </span>
        </h1>
        <p className="mt-12 px-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          impedit voluptatibus cumque illum! Distinctio natus tempora voluptatum
          esse, dolorem expedita voluptatibus, rem officia dicta provident
          quisquam debitis fugit! Consequuntur cumque eligendi sint qui, quia
          eaque. Laborum molestias iure blanditiis corrupti perferendis, nam
          maxime ullam tempore dignissimos quidem dicta libero harum consequatur
          totam.
        </p>
        <NavLink to="/">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-4">
            Back
          </button>
        </NavLink>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-7">
        {list
          .filter((item) => item.category === "paid")
          .map((item) => (
            <Cards key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Courses;
