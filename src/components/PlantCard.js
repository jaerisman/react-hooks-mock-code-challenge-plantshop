import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(plant.isSoldOut);
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button
        className={isSoldOut ? "primary" : ""}
        onClick={() => setIsSoldOut(!isSoldOut)}
      >
        {isSoldOut ? "Sold Out" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
