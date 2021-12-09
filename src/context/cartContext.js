import { createContext, useContext, useState  } from "react";

const CartContext = createContext();

export const UseCart = () => useContext(CartContext);

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
    console.log(cart);
    const removeItem = (id) => {
      const remove = cart.filter (i => i.id !== id);
      setCart(remove);
    }
    const emptyCart = () => {
      setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addedItem, removeItem, emptyCart }}>
          {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider


/*     const {addedItem} = UseCart();
    const [quantityToAdd, setQuantityToAdd] = useState(null);
    const addToCart = () => {
        if (quantityToAdd >= 1) {
            setQuantityToAdd(quantityToAdd);
            item.quantity = quantityToAdd;
            addedItem(item);
            item.stock = item.stock - quantityToAdd;
            item.totalPrice = item.price * item.quantity;
            console.log(item);
            console.log(quantityToAdd)
        }
    }
 */