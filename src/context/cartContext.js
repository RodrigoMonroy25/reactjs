import { createContext, useContext, useState  } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addedItem = (item) => {
      if(!cart.includes(item)){
        return setCart([...cart, item]);
      }
      else{
        return false;
      }
    }
    const removeItem = (id) => {
      const remove = cart.filter (i => i.id !== id);
      setCart(remove);
    }
    const emptyCart = () => {
      setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addedItem, removeItem, emptyCart }}> {children} </CartContext.Provider>
    );
};

export default CartContextProvider
