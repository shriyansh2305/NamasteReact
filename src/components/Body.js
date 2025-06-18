import axios from "axios";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [nextOffset, setNextOffset] = useState("");
  const [widgetOffset, setWidgetOffset] = useState(null);
  const [loading, setLoading] = useState(false);

  const lat = 22.5753931;
  const lng = 88.47979029999999;

  useEffect(() => {
    fetchInitialData();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (
        !loading &&
        nextOffset &&
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
      ) {
        fetchMoreRestaurants();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, nextOffset]);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.swiggy.com/dapi/restaurants/list/v5`,
        {
          params: {
            lat,
            lng,
            "is-seo-homepage-enabled": true,
            page_type: "DESKTOP_WEB_LISTING",
          },
        }
      );

      const json = response.data;

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
      setNextOffset(json?.data?.pageOffset?.nextOffset || "");
      setWidgetOffset(json?.data?.pageOffset?.widgetOffset || {});
    } catch (error) {
      console.error("Error fetching initial data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreRestaurants = async () => {
    if (!nextOffset || loading) return;

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4000/swiggy-update", {
        lat,
        lng,
        nextOffset,
        widgetOffset,
        filters: {},
        seoParams: {
          seoUrl: "https://www.swiggy.com/restaurants",
          pageType: "FOOD_HOMEPAGE",
          apiName: "FoodHomePage",
          businessLine: "FOOD",
        },
        page_type: "DESKTOP_WEB_LISTING",
      });

      const json = res.data;

      const newRestaurants =
        json?.data?.cards?.find(
          (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      if (newRestaurants.length === 0) {
        // No more data, stop scrolling
        setNextOffset("");
      } else {
        setListOfRestaurants((prev) => [...prev, ...newRestaurants]);
        setFilteredRestaurant((prev) => [...prev, ...newRestaurants]);
        setNextOffset(json?.data?.pageOffset?.nextOffset || "");
        setWidgetOffset(json?.data?.pageOffset?.widgetOffset || {});
      }
    } catch (err) {
      console.error("Failed to fetch more restaurants:", err.message);
      setNextOffset(""); // 💥 Prevent infinite scroll retry on failure
    } finally {
      setLoading(false);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants"
          />
          <button
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
        <button
          className="filter-btn"
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

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
      {loading && (
        <p style={{ textAlign: "center" }}>Loading more restaurants...</p>
      )}
    </div>
  );
};

export default Body;
