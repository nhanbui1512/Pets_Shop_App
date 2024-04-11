import { createContext, useEffect, useState } from "react";
import { getMyProfile } from "../Services/API/authService";
// import Cookies from "js-cookie";

export const StorageContext = createContext();

function GlobalStates({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [userData, setUserData] = useState({});
  const [cartItems, setCartItems] = useState([]);

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
