import React from 'react'

const Category = () => {
  return (
    <div className="bg-white  p-6 shadow">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Category</h1>
        <button className="bg-black text-white px-4 py-2 ">
          Add Product
        </button>
      </div>
       <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="p-3">Name</th>
              <th className="p-3">Products</th>
              <th className="p-3">stocks</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody></tbody>
          </table>
          </div>

      </div>
  )
}

export default Category
