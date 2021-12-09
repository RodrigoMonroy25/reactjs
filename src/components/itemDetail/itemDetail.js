import { useState } from "react";
import ItemCount from "../itemCount/itemCount"
import { UseCart } from "../../context/cartContext";

const ItemDetail = (item) => {
    
    const {addedItem} = UseCart();
    const [quantityToAdd, setQuantityToAdd] = useState(null);
    const addToCart = () => {
        if (quantityToAdd >= 1) {
            setQuantityToAdd(quantityToAdd);
            console.log(quantityToAdd)
            console.log(item);
            item.quantity = quantityToAdd;
            addedItem(item);
            item.stock = item.stock - quantityToAdd;
            item.totalPrice = item.price * item.quantity;
        }
    }

    const [counter, setCounter] = useState (0);
    const add = () => {
        if (counter < item.stock) {
            setCounter(counter + 1);
        }
    }
    const discount = () => {
        if (counter > 0){
            setCounter(counter - 1)
        }
    }

    return (
    <div className="card bg-light mb-3 m-2">
        <image className="card-img-top" src={item.image} alt="Card image cap" />
        <div className="card-body">
            <h5 className="fs-4 card-title text-center"> {item.brand} - {item.name} </h5>
            <div className="d-flex justify-content-center">
                <h5 className="fs-6 card-text badge bg-secondary"> $ {item.price} </h5>
            </div>
            <p className="card-text"> {item.description} </p>
            <ItemCount addToCart={addToCart} onAdd={add} onDiscount={discount} counter={counter} brand={item.brand} name={item.name} stock={item.stock} />
        </div>
    </div>
    )
}

export default ItemDetail