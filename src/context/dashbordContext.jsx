import { createContext, useEffect, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  /* ===================== CATEGORIES ===================== */
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem("categories");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, name: "Today Special", products: "0", stock: "0" },
          { id: 2, name: "Our Special", products: "0", stock: "0" },
          { id: 3, name: "South Indian Special", products: "0", stock: "0" },
        ];
  });

  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [isCategoryEdit, setIsCategoryEdit] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);

  const [categoryForm, setCategoryForm] = useState({
    name: "",
    products: "0",
    stock: "0",
  });

  const handleCategoryChange = (e) => {
    setCategoryForm({ ...categoryForm, [e.target.name]: e.target.value });
  };

  const submitCategory = (e) => {
    e.preventDefault();

    if (isCategoryEdit) {
      setCategories((prev) =>
        prev.map((c) =>
          c.id === currentCategoryId ? { ...c, ...categoryForm } : c
        )
      );
    } else {
      setCategories((prev) => [
        ...prev,
        { id: Date.now(), ...categoryForm },
      ]);
    }

    resetCategoryForm();
  };

  const editCategory = (cat) => {
    setCategoryForm(cat);
    setCurrentCategoryId(cat.id);
    setIsCategoryEdit(true);
    setShowCategoryForm(true);
  };

  // ✅ FIXED: delete category + its products
  const deleteCategory = (id) => {
    const categoryToDelete = categories.find((c) => c.id === id);

    setCategories((prev) => prev.filter((c) => c.id !== id));

    if (categoryToDelete) {
      setProducts((prev) =>
        prev.filter((p) => p.category !== categoryToDelete.name)
      );
    }
  };

  const resetCategoryForm = () => {
    setCategoryForm({ name: "", products: "0", stock: "0" });
    setShowCategoryForm(false);
    setIsCategoryEdit(false);
    setCurrentCategoryId(null);
  };

  /* ===================== PRODUCTS ===================== */
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  const [showProductForm, setShowProductForm] = useState(false);
  const [isProductEdit, setIsProductEdit] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  const [productForm, setProductForm] = useState({
    name: "",
    category: "",
    stock: "",
    image: "",
    sizes: { S: "", M: "", L: "" },
    orderType: { dineIn: false, takeaway: false, delivery: false },
  });

  const handleProductChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleSizeChange = (size, value) => {
    setProductForm({
      ...productForm,
      sizes: { ...productForm.sizes, [size]: value },
    });
  };

  const handleOrderType = (type) => {
    setProductForm({
      ...productForm,
      orderType: {
        ...productForm.orderType,
        [type]: !productForm.orderType[type],
      },
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProductForm({ ...productForm, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const submitProduct = (e) => {
    e.preventDefault();

    if (isProductEdit) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === currentProductId ? { ...p, ...productForm } : p
        )
      );
    } else {
      const newProduct = {
        id: Date.now(),
        ...productForm,
      };

      setProducts((prev) => [...prev, newProduct]);

      // ✅ FIXED: update category products + stock
      setCategories((prev) =>
        prev.map((c) =>
          c.name === productForm.category
            ? {
                ...c,
                products: String(Number(c.products) + 1),
                stock: String(
                  Number(c.stock) + Number(productForm.stock || 0)
                ),
              }
            : c
        )
      );
    }

    resetProductForm();
  };

  const editProduct = (p) => {
    setProductForm(p);
    setCurrentProductId(p.id);
    setIsProductEdit(true);
    setShowProductForm(true);
  };

  // ✅ FIXED: reduce category stock on delete
  const deleteProduct = (id) => {
    const productToDelete = products.find((p) => p.id === id);

    setProducts((prev) => prev.filter((p) => p.id !== id));

    if (productToDelete) {
      setCategories((prev) =>
        prev.map((c) =>
          c.name === productToDelete.category
            ? {
                ...c,
                products: String(Number(c.products) - 1),
                stock: String(
                  Number(c.stock) - Number(productToDelete.stock || 0)
                ),
              }
            : c
        )
      );
    }
  };

  const resetProductForm = () => {
    setProductForm({
      name: "",
      category: "",
      stock: "",
      image: "",
      sizes: { S: "", M: "", L: "" },
      orderType: { dineIn: false, takeaway: false, delivery: false },
    });
    setShowProductForm(false);
    setIsProductEdit(false);
    setCurrentProductId(null);
  };

  const updateOrderStatus = (orderId, status) => {
  setConfirmedOrders((prev) =>
    prev.map((order) =>
      order.id === orderId ? { ...order, status } : order
    )
  );
};


  const [confirmedOrders, setConfirmedOrders] = useState(() => {
  const saved = localStorage.getItem("confirmedOrders");
  return saved ? JSON.parse(saved) : [];
});

  /* ===================== LOCAL STORAGE ===================== */
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  useEffect(() => {
  localStorage.setItem(
    "confirmedOrders",
    JSON.stringify(confirmedOrders)
  );
}, [confirmedOrders]);




  return (
    <DashboardContext.Provider
      value={{
        /* CATEGORY */
        categories,
        showCategoryForm,
        setShowCategoryForm,
        isCategoryEdit,
        categoryForm,
        handleCategoryChange,
        submitCategory,
        editCategory,
        deleteCategory,
        resetCategoryForm,

        /* PRODUCTS */
        products,
        showProductForm,
        setShowProductForm,
        isProductEdit,
        productForm,
        handleProductChange,
        handleSizeChange,
        handleOrderType,
        handleImageChange,
        submitProduct,
        editProduct,
        deleteProduct,
        resetProductForm,
        confirmedOrders,
        setConfirmedOrders,
        updateOrderStatus,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
