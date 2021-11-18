import { useState } from 'react'
import { Link } from "react-router-dom"


const ItemCount = (item, onAdd) => {
    const [counter, setCounter] = useState (0);
    const [cartButton, setCartButton] = useState(true)
    const addToCart = () => {
        setCartButton(false)
    }
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
        <div>
            <div className="d-flex justify-content-center align-items-start">
                <button className="btn btn-sm btn-secondary fw-bold mx-2" onClick={discount}> - </button> {/* Subtract */}
                <p className="fs-5 fw-bold"> { counter } </p>
                <button className="btn btn-sm btn-secondary fw-bold mx-2" onClick={add}> + </button> {/* Add */}
            </div>
            <div>
            {cartButton ?
                    <div className="d-flex justify-content-center">
                        <p className="fs-6 btn btn-primary mt-1" onClick={addToCart}>
                            Agregar al carrito
                        </p>
                    </div>
                :   
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <p className="text-secondary fw-bold">Se agrego el producto "{item.brand} {item.name}" correctamente!</p>
                        <Link to={`/cart`} className="fs-6 btn btn-primary mt-1">Ver carrito</Link>   
                    </div>
                }
            </div>
        </div>
    )
}

export default ItemCount