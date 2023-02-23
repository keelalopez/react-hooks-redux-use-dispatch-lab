import React, { useState } from "react";

// STEP 1: IMPORT THE ACTION CREATOR
import { addRestaurant } from "./restaurantsSlice";

// STEP 2: IMPORT useDispatch HOOK 
import { useDispatch } from "react-redux";

function RestaurantInput() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  // STEP 3: DECLARE THE DISPATCH VARIABLE
  const dispatch = useDispatch();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // STEP 4: DISPATCH USING THE ACTION CREATOR
    dispatch(addRestaurant({ name, location }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          id="name"
          placeholder="restaurant name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={handleLocationChange}
          id="location"
          placeholder="location"
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RestaurantInput;
