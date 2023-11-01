import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantList() {
  const [plants, setPlants] = useState([]); 
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant])
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <NewPlantForm addPlant={addPlant} />
      <ul className="cards">
        {filteredPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
