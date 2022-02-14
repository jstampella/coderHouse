import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const getLocalStorage = (key, initialValue) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : initialValue;
};

const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState(getLocalStorage("cartList", []));

  useEffect(() => {
    setLocalStorage("cartList", cartList);
  }, [cartList]);

  const getCount = () => {
    let count = 0;
    cartList.map((prod) => (count += prod.count));
    return count;
  };

  const addToCart = (item, count) => {
    item.count = count;
    let found = cartList.find((product) => product.id === item.id);
    if (found === undefined) {
      setCartList([...cartList, item]);
    } else {
      found.count += count;
    }
  };

  const removeAll = () => {
    setCartList([]);
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
      value={{
        cartList,
        addToCart,
        removeToCart,
        changeCount,
        getCount,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
