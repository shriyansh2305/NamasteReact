import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
//   console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-gray-400 p-2 m-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 relative">
            <img src={CDN_URL + item.card.info.imageId} className="w-full h-40 object-cover" />
            <button className="p-2 bg-black text-white shadow-lg absolute bottom-0 left-1/2 translate-x-[-50%] mb-2 rounded">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
