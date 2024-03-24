import { createContext, useState } from "react";
// import Cookies from "js-cookie";

export const StorageContext = createContext();

function GlobalStates({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [userData, setUserData] = useState({});
  const [cart, setCart] = useState({});

  const states = {
    currentUser,
    setCurrentUser,
    userData,
    setUserData,
    cart,
    setCart,
  };

  return (
    <StorageContext.Provider value={states}>{children}</StorageContext.Provider>
  );
}

export default GlobalStates;
