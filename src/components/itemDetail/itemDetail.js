import { useState } from "react";
import { useCart } from "../../context/cartContext"
import ItemCount from "../itemCount/itemCount"

const ItemDetail = (item) => {
    const {addedItem} = useCart();
    const [quantityToAdd, SetQuantityToAdd] = useState(null);
    const onAdd = (quantityToAdd) => {
        if (quantityToAdd >= 1) {
            SetQuantityToAdd(quantityToAdd);
            item.quantity = quantityToAdd;
            addedItem(item);
            item.stock = item.stock - quantityToAdd;
            item.totalPrice = item.price * item.quantity;
            console.log(item);
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
            <ItemCount onAdd={onAdd} brand={item.brand} name={item.name} stock={item.stock} />
        </div>
    </div>
    )
}

export default ItemDetail