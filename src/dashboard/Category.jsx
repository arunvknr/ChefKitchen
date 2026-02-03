import { useContext } from "react";
import { DashboardContext } from "../context/dashbordContext";

const Category = () => {
  const {
    categories,
    showCategoryForm,
    isCategoryEdit,
    categoryForm,
    setShowCategoryForm,
    handleCategoryChange,
    submitCategory,
    editCategory,
    deleteCategory,
    resetCategoryForm,
  } = useContext(DashboardContext);

  return (
    <div className="bg-white p-6 shadow rounded-xl">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-semibold">Categories</h1>
        <button
          onClick={() => setShowCategoryForm(true)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Category
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Products</th>
            <th className="p-3 text-left">Stock</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="border-b">
              <td className="p-3">{cat.name}</td>
              <td className="p-3">{cat.products}</td>
              <td className="p-3">{cat.stock}</td>
              <td className="p-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => editCategory(cat)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCategory(cat.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showCategoryForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <form
            onSubmit={submitCategory}
            className="bg-white p-6 w-96 rounded shadow"
          >
            <h2 className="mb-4 font-semibold text-lg">
              {isCategoryEdit ? "Edit Category" : "Add Category"}
            </h2>

            <input
              name="name"
              value={categoryForm.name}
              onChange={handleCategoryChange}
              placeholder="Category Name"
              className="w-full border p-2 mb-3"
              required
            />
            <input
              name="products"
              type="number"
              value={categoryForm.products}
              onChange={handleCategoryChange}
              placeholder="Products"
              className="w-full border p-2 mb-3"
              required
            />
            <input
              name="stock"
              type="number"
              value={categoryForm.stock}
              onChange={handleCategoryChange}
              placeholder="Stock"
              className="w-full border p-2 mb-4"
              required
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={resetCategoryForm}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded"
              >
                {isCategoryEdit ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Category;
