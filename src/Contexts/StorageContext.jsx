import { createContext, useEffect, useState } from "react";
import { getMyProfile } from "../Services/API/authService";
// import Cookies from "js-cookie";

export const StorageContext = createContext();

function GlobalStates({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [userData, setUserData] = useState({});
  const [cartItems, setCartItems] = useState([
    {
      _id: "661686742b024bf2abe8fde1",
      productImage: [
        "https://i.pinimg.com/564x/9e/be/af/9ebeaf7aa7e3db7352df8346d0cbc9fa.jpg",
      ],
      name: "test1",
      description: "Day la san pham test",
      categoryID: [
        {
          _id: "660fb6da284e112c153c8c5d",
          name: "Dụng cụ vệ sinh",
        },
      ],
      variantOptions: {
        _id: "661686742b024bf2abe8fddf",
        name: "Màu",
        value: "Đỏ",
        price: 120000,
      },

      deleted: false,
      createdAt: "2024-04-10T12:30:44.428Z",
      updatedAt: "2024-04-10T12:30:44.428Z",
      quantity: 1,
    },
    {
      _id: "66135c64e9f3a3c3401ba1ff",
      productImage: [
        "https://i.pinimg.com/564x/d4/4b/fe/d44bfe400509b1846d24c9f63adba3db.jpg",
      ],
      name: "Test",
      description: "Đây là sản phẩm test",
      categoryID: [
        {
          _id: "660fb6a1284e112c153c8c5b",
          name: "Đồ chơi chó mèo",
        },
      ],
      variantOptions: {
        _id: "66135c64e9f3a3c3401ba1fd",
        name: "Màu",
        value: "đỏ",
        price: 50000,
      },
      deleted: false,
      createdAt: "2024-04-08T02:54:28.887Z",
      updatedAt: "2024-04-08T02:54:28.887Z",
      quantity: 1,
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

  useEffect(() => {
    getMyProfile()
      .then((res) => {
        setCurrentUser(true);
      })
      .catch((err) => {
        setCurrentUser(false);
      });
  }, []);

  return (
    <StorageContext.Provider value={states}>{children}</StorageContext.Provider>
  );
}

export default GlobalStates;
