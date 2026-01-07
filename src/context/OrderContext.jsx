
// import { createContext, useEffect, useState } from "react";
// import { dishes } from "../icons/index";

// export const OrderContext = createContext();

// export function OrderProvider({ children }) {
//   const [active, setActive] = useState("today");
//   const [orders, setOrders] = useState([]);
//   const [showOrders, setShowOrders] = useState(false);
//   const [selectedSizes, setSelectedSizes] = useState({});
//   const [addedItems, setAddedItems] = useState({});
//   const [today, setToday] = useState(new Date());
//   const [searchTerm, setSearchTerm] = useState("");
//   const [orderType, setOrderType] = useState("dine-in");
//   const [receipt, setReceipt] = useState(null);
//   const [filteredDishes, setFilteredDishes] = useState([]);

//   // update time
//   useEffect(() => {
//     const interval = setInterval(() => setToday(new Date()), 60000);
//     return () => clearInterval(interval);
//   }, []);

//   // ✅ FIXED FILTER EFFECT
//   useEffect(() => {
//     const result = dishes.filter(
//       (item) =>
//         item.type.includes(orderType) &&
//         item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredDishes(result);
//   }, [orderType, searchTerm]); // ✅ IMPORTANT

//   const getPriceBySize = (price, size) => {
//     if (size === "S") return price - 2;
//     if (size === "M") return price;
//     return price + 2;
//   };

//   const handleSubmit = (item) => {
//     const size = selectedSizes[item.name] || "M";
//     const price = getPriceBySize(item.basePrice, size);

//     setOrders((prev) => {
//       const exists = prev.find(
//         (o) =>
//           o.name === item.name &&
//           o.size === size &&
//           o.type === orderType
//       );

//       if (exists) {
//         return prev.map((o) =>
//           o.name === item.name && o.size === size
//             ? { ...o, qty: o.qty + 1 }
//             : o
//         );
//       }

//       return [
//         ...prev,
//         {
//           ...item,
//           size,
//           price,
//           qty: 1,
//           type: orderType,
//         },
//       ];
//     });

//     setAddedItems((prev) => ({
//       ...prev,
//       [`${item.name}-${size}`]: true,
//     }));

//     setShowOrders(true);
//   };

//   const increaseQty = (name, size) => {
//     setOrders((prev) =>
//       prev.map((item) =>
//         item.name === name && item.size === size
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (name, size) => {
//     setOrders((prev) =>
//       prev
//         .map((item) =>
//           item.name === name && item.size === size
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const removeItem = (name, size) => {
//     setOrders((prev) =>
//       prev.filter((item) => !(item.name === name && item.size === size))
//     );
//   };

//   const cartCount = orders.reduce((t, i) => t + i.qty, 0);

//   const onClose = () => setShowOrders(false);

//   const onConfirmOrder = (data) => {
//     setReceipt(data);
//     setShowOrders(false);
//     setAddedItems({});
//   };

//   const onConfirm = () => {
//     setReceipt(null);
//     setOrders([]);
//     setSelectedSizes({}); // ✅ FIXED
//   };

//   return (
//     <OrderContext.Provider
//       value={{
//         active,
//         setActive,
//         orders,
//         showOrders,
//         selectedSizes,
//         setSelectedSizes,
//         addedItems,
//         today,
//         searchTerm,
//         setSearchTerm,
//         orderType,
//         setOrderType,
//         receipt,
//         handleSubmit,
//         removeItem,
//         decreaseQty,
//         increaseQty,
//         filteredDishes,
//         cartCount,
//         onConfirm,
//         onClose,
//         onConfirmOrder,
//          getPriceBySize,
//       }}
//     >
//       {children}
//     </OrderContext.Provider>
//   );
// }

import { createContext, useEffect, useState } from "react";
import { dishes } from "../icons/index";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [active, setActive] = useState("today"); // tab
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedItems, setAddedItems] = useState([]);
  const [today, setToday] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [orderType, setOrderType] = useState("dine-in");
  const [receipt, setReceipt] = useState(null);
  const [filteredDishes, setFilteredDishes] = useState([]);

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => setToday(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const getPriceBySize = (price, size) => {
    if (size === "S") return price - 2;
    if (size === "M") return price;
    return price + 2;
  };

  const handleSubmit = (item) => {
    const size = selectedSizes[item.name] || "M";
    const price = getPriceBySize(item.basePrice, size);

    setOrders((prev) => {
      const exists = prev.find(
        (o) => o.name === item.name && o.size === size && o.type === orderType
      );

      if (exists) {
        return prev.map((o) =>
          o.name === item.name && o.size === size ? { ...o, qty: o.qty + 1 } : o
        );
      }

      return [
        ...prev,
        {
          ...item,
          size,
          price,
          qty: 1,
          type: orderType,
        },
      ];
    });

    setAddedItems((prev) => ({ ...prev, [`${item.name}-${size}`]: true }));
    setShowOrders(true);
  };

  const increaseQty = (name, size) => {
    setOrders((prev) =>
      prev.map((item) =>
        item.name === name && item.size === size
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (name, size) => {
    setOrders((prev) =>
      prev
        .map((item) =>
          item.name === name && item.size === size
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (name, size) => {
    setOrders((prev) =>
      prev.filter((item) => !(item.name === name && item.size === size))
    );
    setAddedItems((prev) => {
      const copy = { ...prev };
      delete copy[`${name}-${size}`];
      return copy;
    });
  };

  // 🔥 FILTER DISHES BASED ON TAB + ORDER TYPE + SEARCH
  useEffect(() => {
    const result = dishes.filter((item) => {
      const matchType = item.type.includes(orderType);
      const matchSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchTab = active === "all" || item.category === active;

      return matchType && matchSearch && matchTab;
    });

    setFilteredDishes(result);
  }, [orderType, searchTerm, active]);

  const cartCount = orders.reduce((total, item) => total + item.qty, 0);

  const onConfirm = () => {
    setReceipt(null);
    setOrders([]);
    setSelectedSizes([]);
  };

  const onClose = () => setShowOrders(false);

  const onConfirmOrder = (data) => {
    setReceipt(data);
    setShowOrders(false);
    setAddedItems([]);
  };

  return (
    <OrderContext.Provider
      value={{
        active,
        setActive,
        orders,
        setOrders,
        showOrders,
        setShowOrders,
        selectedSizes,
        setSelectedSizes,
        addedItems,
        setAddedItems,
        today,
        setToday,
        searchTerm,
        setSearchTerm,
        orderType,
        setOrderType,
        receipt,
        setReceipt,
        handleSubmit,
        removeItem,
        decreaseQty,
        increaseQty,
        filteredDishes,
        cartCount,
        onConfirm,
        onClose,
        getPriceBySize,
        onConfirmOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
