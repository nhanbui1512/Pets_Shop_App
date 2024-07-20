import { createContext, useEffect, useState } from "react";
import { getMyProfile } from "../Services/API/authService";
import { socket } from "../Services/Socket";
import { categories as categoriesData } from "./data";

import Cookies from "js-cookie";

export const StorageContext = createContext();

function GlobalStates({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [userData, setUserData] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const states = {
    currentUser,
    setCurrentUser,
    userData,
    setUserData,
    cartItems,
    setCartItems,
    categories,
    setCategories,
    socket,
  };

  const saveCartToLocalStorage = () => {
    // Chuyển đổi mảng các mục giỏ hàng sang JSON
    const cartJSON = JSON.stringify(cartItems);
    // Lưu vào Local Storage với tên 'cart'
    localStorage.setItem("cart", cartJSON);
  };

  const loadCartFromLocalStorage = () => {
    // Lấy dữ liệu từ Local Storage
    const cartJSON = localStorage.getItem("cart");
    // Chuyển đổi từ JSON thành mảng các mục giỏ hàng
    if (cartJSON) {
      const cartData = JSON.parse(cartJSON);
      setCartItems(cartData);
    }
  };

  useEffect(() => {
    loadCartFromLocalStorage();
    const filteredItems = categoriesData.filter(
      (item) => item.name !== "Bài viết"
    );
    setCategories(filteredItems);
    const token = Cookies.get("token");
    if (token) {
      getMyProfile()
        .then((res) => {
          setCurrentUser(true);
          setUserData(res);
        })
        .catch((err) => {
          setCurrentUser(false);
        });
    }
  }, []);

  useEffect(() => {
    saveCartToLocalStorage();
    // eslint-disable-next-line
  }, [cartItems]);

  useEffect(() => {
    if (!userData || userData.UserRoles !== "admin") {
      // socket.connect();
    } else {
      socket.disconnect();
    }
  }, [userData]);

  return (
    <StorageContext.Provider value={states}>{children}</StorageContext.Provider>
  );
}

export default GlobalStates;
