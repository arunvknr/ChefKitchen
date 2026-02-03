import { createContext, useContext, useEffect, useState } from "react";
import { DashboardContext } from "../context/dashbordContext";

export const OrderContext = createContext();

export function OrderContextProvider({ children }) {
  const { products } = useContext(DashboardContext);

  const [active, setActive] = useState("all");
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);

  // ✅ NEW STATES (ADDED)
  const [showReceipt, setShowReceipt] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedItems, setAddedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [orderType, setOrderType] = useState("dine-in");
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [today, setToday] = useState(new Date());

  const onClose = () => setShowOrders(false);

  const cartCount = orders.reduce((acc, item) => acc + item.qty, 0);

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
        (o) => o.name === item.name && o.size === size
      );

      if (exists) {
        return prev.map((o) =>
          o.name === item.name && o.size === size
            ? { ...o, qty: o.qty + 1 }
            : o
        );
      }

      return [
        ...prev,
        { ...item, size, price, qty: 1, type: orderType },
      ];
    });

    setAddedItems((prev) => ({
      ...prev,
      [`${item.name}-${size}`]: true,
    }));

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
      prev.filter(
        (item) => !(item.name === name && item.size === size)
      )
    );

    setAddedItems((prev) => {
      const copy = { ...prev };
      delete copy[`${name}-${size}`];
      return copy;
    });
  };

  // ✅ UPDATED (ADDED RECEIPT FLOW)
  const onConfirmOrder = (data) => {
    console.log("CONFIRMED ORDER 👉", data);
    setConfirmedOrder(data);
    setShowReceipt(true);
    setShowOrders(false);
  };

  
  // ✅ NEW
  const onCloseReceipt = () => {
    setShowReceipt(false);
    setConfirmedOrder(null);
    setOrders([]);
    setAddedItems({});
  };

  /* ================= FILTER PRODUCTS ================= */
  useEffect(() => {
    const result = products
      .map((p) => ({
        id: p.id,
        name: p.name,
        img: p.image,
        category: p.category,
        basePrice: Number(p.sizes.M || 0),
        bowls: "Available",
        sizes: ["S", "M", "L"],
        type: [
          p.orderType.dineIn && "dine-in",
          p.orderType.takeaway && "takeaway",
          p.orderType.delivery && "delivery",
        ].filter(Boolean),
      }))
      .filter((item) => {
        const matchType = item.type.includes(orderType);
        const matchSearch = item.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchTab = active === "all" || item.category === active;
        return matchType && matchSearch && matchTab;
      });

    setFilteredDishes(result);
  }, [products, orderType, searchTerm, active]);

  return (
    <OrderContext.Provider
      value={{
        active,
        setActive,
        filteredDishes,
        selectedSizes,
        setSelectedSizes,
        addedItems,
        orders,
        cartCount,
        showOrders,
        setShowOrders,
        increaseQty,
        decreaseQty,
        removeItem,
        onConfirmOrder,
        onCloseReceipt,
        showReceipt,
        confirmedOrder,
        getPriceBySize,
        handleSubmit,
        orderType,
        setOrderType,
        onClose,
        searchTerm,
        setSearchTerm,
        today,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
