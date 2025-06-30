import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  //   console.log(data);
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems((prev) => !prev);
  };
  return (
    <div>
      {/* Accordion Header */}
      <div className="w-1/2 mx-auto my-4 bg-gray-200 p-4 shadow-lg">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
