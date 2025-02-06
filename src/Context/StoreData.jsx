import { createContext, useState } from "react";

export const storeContext = createContext();

const StoreData = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const sharedData = { cart, setCart, wishlist, setWishlist };
  console.log("Cart:", cart);
  console.log("Wishlist:", wishlist);
  return (
    <storeContext.Provider value={sharedData}>{children}</storeContext.Provider>
  );
};

export default StoreData;
