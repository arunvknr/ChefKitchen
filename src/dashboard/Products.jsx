import { useContext } from "react";
import { DashboardContext } from "../context/dashbordContext";

const Products = () => {
  const {
    products,
    showProductForm,
    setShowProductForm,
    productForm,
    handleProductChange,
    handleSizeChange,
    handleOrderType,
    submitProduct,
    resetProductForm,
    categories,
    handleImageChange,
    editProduct,
    deleteProduct,
    isProductEdit,
  } = useContext(DashboardContext);

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-semibold">Products</h1>
        <button
          onClick={() => {
            resetProductForm();
            setShowProductForm(true);
          }}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">Stock</th>
            <th className="p-3">Sizes</th>
            <th className="p-3">Order Type</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="p-3">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-10 h-10 rounded object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded" />
                )}
              </td>
              <td className="p-3 font-medium">{p.name}</td>
              <td className="p-3">{p.category}</td>
              <td className="p-3">{p.stock}</td>
              <td className="p-3">
                {Object.entries(p.sizes).map(
                  ([s, price]) =>
                    price && (
                      <span
                        key={s}
                        className="mr-2 bg-yellow-100 px-2 py-1 rounded text-xs"
                      >
                        {s} ₹{price}
                      </span>
                    )
                )}
              </td>
              <td className="p-3">
                {Object.entries(p.orderType)
                  .filter(([_, v]) => v)
                  .map(([k]) => k)
                  .join(", ")}
              </td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => editProduct(p)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Product Form */}
      {showProductForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <form onSubmit={submitProduct} className="bg-white p-6 w-96 rounded">
            <h2 className="font-semibold mb-4">
              {isProductEdit ? "Edit Product" : "Add Product"}
            </h2>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 w-full mb-2"
            />

            <input
              name="name"
              value={productForm.name}
              onChange={handleProductChange}
              placeholder="Product name"
              className="border p-2 w-full mb-2"
              required
            />

            <select
              name="category"
              value={productForm.category}
              onChange={handleProductChange}
              className="border p-2 w-full mb-2"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>

            <input
              name="stock"
              type="number"
              value={productForm.stock}
              onChange={handleProductChange}
              placeholder="Stock"
              className="border p-2 w-full mb-3"
              required
            />

            <p className="font-medium">Sizes & Price</p>
            {["S", "M", "L"].map((s) => (
              <input
                key={s}
                type="number"
                placeholder={`${s} price`}
                className="border p-2 w-full mb-2"
                value={productForm.sizes[s]}
                onChange={(e) => handleSizeChange(s, e.target.value)}
              />
            ))}

            <p className="font-medium mt-3">Order Type</p>
            {["dineIn", "takeaway", "delivery"].map((t) => (
              <label key={t} className="block capitalize">
                <input
                  type="checkbox"
                  checked={productForm.orderType[t]}
                  onChange={() => handleOrderType(t)}
                />{" "}
                {t}
              </label>
            ))}

            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={resetProductForm}
                className="border px-4 py-2"
              >
                Cancel
              </button>
              <button className="bg-black text-white px-4 py-2">
                {isProductEdit ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Products;
