import React from 'react';
import ShoppingCartImage from '../../img/shopping-cart.png';

const CartWidget = () => {
    return (
        <div>
            <p>
            <image src={ShoppingCartImage} alt="Shopping cart" />
            </p>
        </div>
    )
}

export default CartWidget