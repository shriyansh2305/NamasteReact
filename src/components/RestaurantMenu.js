import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItemIndex, setShowItemIndex] = useState(null);
  if (!resInfo) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log("b", resInfo);
  // console.log("c", itemCards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // console.log(categories);
  const handleCategoryClick = (index) => {
    setShowItemIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-gray-100 text-center">
      <h1 className="font-bold text-2xl my-4">{name}</h1>
      <p className="font-semibold text-xl">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={index === showItemIndex ? true : false}
          setShowItemIndex={() => handleCategoryClick(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
