import "./App.css";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import { Route, Routes } from "react-router-dom";
import Layout from "./dashboard/Layout";
import Category from "./dashboard/Category";
import Products from "./dashboard/Products";
import Orders from "./component/Orders";
import AdminOrders from "./dashboard/AdminOrders";
import ConfirmOrderReceipt from "./component/ConfirmOrderReceipt";
import { useContext } from "react";
import { OrderContext } from "./context/OrderContext";

function App() {
  const { showReceipt } = useContext(OrderContext);

  return (
    <>
      <div className="flex h-full w-full bg-gray-900">
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/home" element={<Home />} />

          <Route path="/layout" element={<Layout />}>
            <Route path="category" element={<Category />} />
            <Route path="products" element={<Products />} />
            <Route path="orderadmin" element={<AdminOrders />} />
          </Route>
        </Routes>

        {/* ✅ GLOBAL COMPONENTS */}
        <Orders />
        {showReceipt && <ConfirmOrderReceipt />}
      </div>
    </>
  );
}

export default App;
