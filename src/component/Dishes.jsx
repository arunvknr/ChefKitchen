
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const Dishes = () => {
  const {
    filteredDishes,
    showOrders,
    selectedSizes,
    setSelectedSizes,
    addedItems,
    orders,
    getPriceBySize,
    handleSubmit,
  } = useContext(OrderContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-20 mt-20 pb-20">
      {filteredDishes.length === 0 && (
        <p className="text-center text-gray-400 col-span-full">
          No dishes found
        </p>
      )}

      {filteredDishes.map((item) => {
        const size = selectedSizes[item.name] || "M";
        const isAdded = addedItems[`${item.name}-${size}`];

        return (
          <div
            key={item.id}
            className="relative bg-[#1F1D2B] rounded-3xl p-3 text-center pb-8"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-24 h-24 rounded-full absolute -top-12 left-1/2 -translate-x-1/2"
            />

            <p className="mt-12 font-semibold">{item.name}</p>

            <p className="text-green-400 mt-2">
              {getPriceBySize(item.basePrice, size)} AED
            </p>

            <div className="flex gap-2 justify-center mt-3">
              {item.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() =>
                    setSelectedSizes((prev) => ({ ...prev, [item.name]: s }))
                  }
                  className={`px-3 py-1 rounded ${
                    size === s ? "bg-orange-500" : "bg-gray-700"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleSubmit(item)}
              className={`mt-4 px-10 py-2 rounded ${
                isAdded ? "bg-green-600" : "bg-orange-500"
              }`}
            >
              {isAdded ? "Added" : "Add"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Dishes;

