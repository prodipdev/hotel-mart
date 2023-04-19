import React from "react";
import { Link } from "react-router-dom";
import { FaBed, FaPeopleArrows, FaDollarSign } from "react-icons/fa";

const FeatureCard = ({ room }) => {
  const { title, image, description, beds, max_occupancy, price_per_night } =
    room;
  return (
    <div className="border rounded text-gray-700 h-full grid shadow shadow-indigo-100 py-2">
      <h2 className="text-xl px-3 pb-2">{title}</h2>
      <img className="h-60 w-full bg-cover" src={image} alt="image" />
      <p className="my-4 px-2">{description.slice(0, 100)}...</p>
      <div className="flex justify-between items-center gap-3 px-3 pb-2 mt-auto">
        <span className="flex items-center bg-indigo-50 px-2 rounded-full">
          <FaBed />: {beds}
        </span>
        <span className="flex items-center bg-indigo-50 px-2 rounded-full">
          <FaPeopleArrows />: {max_occupancy}
        </span>
        <span className="flex items-center bg-indigo-50 px-2 rounded-full">
          <FaDollarSign /> : {price_per_night}
        </span>
        <Link
          to={"/checkout"}
          className="bg-indigo-500 hover:bg-indigo-600 px-2 py-1 rounded text-white"
        >
          Book
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
