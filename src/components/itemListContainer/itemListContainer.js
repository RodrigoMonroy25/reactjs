//import { useEffect, useState } from "react";
import ItemList from "../itemList/itemList.js"

const ItemListContainer = (props) => {

    return (
    <div>
        <p className="fs-1">{props.greeting}</p>
        <ItemList/>
        <ItemList/>
    </div>
    )
}

export default ItemListContainer