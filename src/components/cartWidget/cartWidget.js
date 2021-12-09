import React from "react";
import Images from "../../assets/img/img.js";

const CartWidget = () => {
  return (
    <div>
      <img src={Images[1].img} alt="Shopping cart" className="img-fluid " style={{ maxWidth: "35px", minHeight: "30px" }}/>
    </div>
  );
};

export default CartWidget;
