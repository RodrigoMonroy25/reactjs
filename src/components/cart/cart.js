import { Link } from "react-router-dom";
import { UseCart } from "../../context/cartContext";

const Cart = () => {
    const {removeItem, emptyCart} = UseCart()

    return (
        <div className="">
            <h1 className="text-center fw-light bi-cart">Mi carrito</h1>
            <section className="container">
                <h4 className="fw-light bi bi-check"> Nombre producto </h4>
                <h6 className="fw-light"> Cantidad - Precio Unitario </h6>
                <h6 onClick={removeItem} className="fw-light bi bi-trash-fill"> Eliminar ítem </h6>
                <br/>
                <h6 OnClick={emptyCart} className="fw-light bi bi-cart-x-fill"> Vaciar carrito </h6>
                <br/>
                <h4 className="fw-light text-end bi bi-cash-coin"> Total a pagar: $ </h4>
                <h4 className="fw-light text-center bi bi-shop"> <Link to={`/`}> Seguir comprando </Link> </h4>
                <h4 className="fw-light text-center bi bi-cart-check-fill"> <Link to={`/`}> Finalizar compra </Link></h4>
            </section>
        </div>
    )
};

export default Cart