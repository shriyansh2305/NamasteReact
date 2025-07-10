import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;
  const {loggedInUser} = useContext(UserContext);
  return (
    <div data-testid="resCard" className="p-4 m-4 w-72 bg-gray-100 rounded-lg hover:bg-gray-200">
      {/* Conditionally render label */}
      {/* {avgRating >= 4.5 && (
        <span className="absolute bg-yellow-400 text-black p-1 rounded">
          Promoted
        </span>
      )} */}
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-2xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4 className="font-bold text-xl">USER: {loggedInUser}</h4>
    </div>
  );
};

// Highere Order Component

// input => ReataurantCard :output=> ReataurantCardPromoted
export const withPromotedLabel = (ReataurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-1 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
