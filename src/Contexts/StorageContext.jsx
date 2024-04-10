import { createContext, useEffect, useState } from "react";
import { getMyProfile } from "../Services/API/authService";
// import Cookies from "js-cookie";

export const StorageContext = createContext();

function GlobalStates({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [userData, setUserData] = useState({});
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cá hồi que cho chó Bow wow 150g",
      price: 65000,
      quantity: 3,
      image:
        "https://bizweb.dktcdn.net/100/229/172/products/bow-wow-ca-hoi-150g-1709195437957.jpg?v=1709473755860",
    },
    {
      id: 2,
      name: "Phô mai cuộn cho chó Bow wow cheese roll 120g",
      price: 60000,
      quantity: 3,
      image:
        "https://bizweb.dktcdn.net/100/229/172/products/bow-wow-pho-mai-cuon-ga-1709195207055.jpg?v=1709440731433",
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
