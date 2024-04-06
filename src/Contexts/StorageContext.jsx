import { createContext, useState } from "react";
// import Cookies from "js-cookie";

export const StorageContext = createContext();

function GlobalStates({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [userData, setUserData] = useState({});
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 200000,
      quantity: 1,
      description: "",
      image:
        "https://cdn.vectorstock.com/i/1000x1000/79/10/product-icon-simple-element-vector-27077910.webp",
    },
    {
      id: 2,
      name: "Product 2",
      price: 150000,
      quantity: 2,
      description: "",
      image:
        "https://cdn.vectorstock.com/i/1000x1000/79/10/product-icon-simple-element-vector-27077910.webp",
    },
    {
      id: 3,
      name: "Product 3",
      price: 180000,
      quantity: 3,
      description: "",
      image:
        "https://cdn.vectorstock.com/i/1000x1000/79/10/product-icon-simple-element-vector-27077910.webp",
    },
  ]);

  const states = {
    currentUser,
    setCurrentUser,
    userData,
    setUserData,
    cartItems,
    setCartItems,
  };

  return (
    <StorageContext.Provider value={states}>{children}</StorageContext.Provider>
  );
}

export default GlobalStates;
