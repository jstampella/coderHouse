import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, count) => {
    item.count = count;
    let found = cartList.find((product) => product.id === item.id);
    if (found === undefined) {
      setCartList([...cartList, item]);
    } else {
      found.count += count;
    }
  };

  const removeToCart = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
  };

  const changeCount = (id, setVal) => {
    let found = cartList.find((product) => product.id === id);
    let count = found.count + setVal;

    if (count > 0 && count <= found.stock)
      return setCartList([
        ...cartList.map((prod) => {
          if (prod.id === id) prod.count = count;
          return prod;
        }),
      ]);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeToCart, changeCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
