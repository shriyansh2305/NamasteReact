import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import { useState } from "react";
const Body = () => {
  // Local State Variable : Super powered variable
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList)
  const arr = useState(resList)
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];

  // Normal JS variable
  // let listOfRestaurants = [];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4);
            // React will re-render the body compoenent
            setListOfRestaurants(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
