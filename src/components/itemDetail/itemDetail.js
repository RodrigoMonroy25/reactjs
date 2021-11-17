import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../itemCount/itemCount"

const ItemDetail = (prop) => {
    const [cartButton, setCartButton] = useState(true)
    const onAdd = (quantityToAdd) => {
        
        setCartButton(false)
        return(
            <>
                <p>Hola juan carlos</p>
            </>
        )
    }

    return (
    <div className="card bg-light mb-3 m-2">
        <image className="card-img-top" src={prop.imagen} alt="Card image cap" />
        <div className="card-body">
            <h5 className="fs-4 card-title text-center"> {prop.marca} - {prop.nombre} </h5>
            <div className="d-flex justify-content-center">
                <h5 className="fs-6 card-text badge bg-secondary"> $ {prop.precio} </h5>
            </div>
            <p className="card-text"> {prop.descripcion} </p>
            <ItemCount stock="15"/>
            {cartButton ?
                <div className="d-flex justify-content-center" onClick={onAdd}>
                    <p className="fs-6 btn btn-primary mt-1">Agregar al carrito</p>   
                </div>
             :
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <p className="text-secondary fw-bold">Se agregó el producto "{prop.marca} {prop.nombre}" correctamente!</p>
                    <Link to={`/cart`} className="fs-6 btn btn-primary mt-1">Ver carrito</Link>   
                </div>
            }
        </div>
    </div>
    )
}

export default ItemDetail       