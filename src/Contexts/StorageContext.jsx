import { createContext, useEffect, useState } from "react";
import { getMyProfile } from "../Services/API/authService";
import { getAllCategories } from "../Services/API/Category";
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

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res);
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

  return (
    <StorageContext.Provider value={states}>{children}</StorageContext.Provider>
  );
}

export default GlobalStates;
