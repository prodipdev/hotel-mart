import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("allRooms.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  console.log(rooms);
  return (
    <div className="px-5 sm:px-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
      {rooms.map((room) => (
        <FeatureCard key={room.room_number} room={room}></FeatureCard>
      ))}
    </div>
  );
};

export default Features;
