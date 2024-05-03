import { createContext, useEffect, useState } from "react";
import { getMyProfile } from "../Services/API/authService";
import { getAllCategories } from "../Services/API/Category";
import { socket } from "../Services/Socket";

// import Cookies from "js-cookie";

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
    getAllCategories()
      .then((res) => {
        const filteredItems = res.filter((item) => item.name !== "Bài viết");
        setCategories(filteredItems);
      })
      .catch((err) => {
        console.log(err);
      });

    getMyProfile()
      .then((res) => {
        setCurrentUser(true);
        setUserData(res);
      })
      .catch((err) => {
        setCurrentUser(false);
      });
  }, []);

  useEffect(() => {
    saveCartToLocalStorage();
    // eslint-disable-next-line
  }, [cartItems]);

  useEffect(() => {
    socket.connect();
  }, []);

  return (
    <StorageContext.Provider value={states}>{children}</StorageContext.Provider>
  );
}

export default GlobalStates;
