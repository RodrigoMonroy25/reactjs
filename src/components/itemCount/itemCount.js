import { useState } from 'react'
import { Link } from "react-router-dom"


const ItemCount = ({ counter, onAdd, onDiscount, brand, name, addToCart }) => {
    const [cartButton, setCartButton] = useState(true)

    return (
        <div>
            {cartButton &&
                <div className="d-flex justify-content-center align-items-start">
                    <button className="btn btn-sm btn-secondary fw-bold mx-2" onClick={onDiscount}> - </button> {/* Subtract */}
                    <p className="fs-5 fw-bold"> { counter } </p>
                    <button className="btn btn-sm btn-secondary fw-bold mx-2" onClick={onAdd}> + </button> {/* Add */}
                </div>
            }
            <div>
            {!counter ? 
                <div className="d-flex justify-content-center">
                    <p className="text-primary fw-bold">Ingrese cantidad</p>
                </div>
                :
                <>
                    {!cartButton ?
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <p className="text-secondary fw-bold">Se agrego el producto "{brand} {name}" correctamente!</p>
                            <Link to={`/cart`} className="fs-6 btn btn-primary mt-1">Ver carrito</Link>
                        </div>
                        :
                        <div className="d-flex justify-content-center">
                            <p className="fs-6 btn btn-primary mt-1" onClick={() => {
                                setCartButton(false);
                                console.log(`Se agregaron ${counter} unidades al carrito`);
                            }}>
                                Agregar al carrito
                            </p>
                        </div>
                }
                </>
            }

            </div>
        </div>
    )
}

export default ItemCount