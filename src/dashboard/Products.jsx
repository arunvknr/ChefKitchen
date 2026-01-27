import React from "react";
import { dishes } from "../icons/index";

const Products = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Products</h1>
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Add Product
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Sizes</th>
              <th className="p-3">Order Type</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {dishes.map((dish, index) => (
              <tr key={index} className="border-b text-sm">

                {/* Image */}
                <td className="p-3">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>

                {/* Name */}
                <td className="p-3 font-medium">{dish.name}</td>

                {/* Category */}
                <td className="p-3 text-gray-500">
                  {dish.categorys}
                </td>

                {/* Stock */}
                <td className="p-3">{dish.stock}</td>

                {/* Sizes */}
                <td className="p-3">
                  <div className="flex gap-1">
                    {dish.sizes.map((size) => (
                      <span
                        key={size}
                        className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Order Type */}
                <td className="p-3 text-gray-500">
                  {dish.type.join(", ")}
                </td>

                {/* Actions */}
                <td className="p-3 text-right text-xl cursor-pointer">
                  ⋮
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>
          Showing 1–{dishes.length} of {dishes.length}
        </span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded">Prev</button>
          <button className="px-3 py-1 border rounded bg-gray-100">1</button>
          <button className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
