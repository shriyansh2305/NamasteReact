import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  console.log(listOfRestaurants);
  useEffect(() => {
    // It will run after the component has been rendered
    // console.log("body rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    // fetch is given by browser
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5753931&lng=88.47979029999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      setListOfRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(
      //   jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
    } catch {
      console.log("Error while Fetching restaurant data!!");
    }
  };
  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);
  // conditional rendering

  if (!onlineStatus)
    return <h1>You're Offline, Please check your internet connection!!</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="p-4 m-4">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="mx-4 border-2 border-solid"
          />
          <button
            className="px-4 mx-4 bg-green-100 border-2 border-solid rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4">
          <button
            className="px-4 mx-4 bg-gray-100 border-2 border-solid rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {/* If the restaurant is promoted, then add a label to it. */}
              {restaurant.info.avgRating >= 4.5 ? (
                <PromotedRestaurantCard resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
