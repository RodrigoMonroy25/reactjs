import { useState, useEffect } from "react";
import Item from "../item/item.js";
import Products from '../products/products.json'

const ItemList = () => {
    const [productos, setProductos] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect (() => {
        const task = new Promise ((resolve, reject) => {
            setTimeout(() =>{
                resolve(Products);
                reject("Error");
            }, 2000)
        });
        task.then (
            (result) => {
                console.log(result);
                setProductos(result);
                setLoading(false);
            },
            (error) => {
                console.log(error)
            }
        )
        task.catch(
            (error) => {
                console.log("Catch error: " + error);
            }   
        )
    }, []);

    return (
    <div className="card-group">
        {productos?.map(({id, marca, nombre, descripcion, imagen, precio}) => (
        <Item key={id} marca={marca} nombre={nombre} descripcion={descripcion} imagen={imagen} precio={precio} />
        ))}
        {loading &&
        <div className="d-flex align-items-center m-2">
            <strong>Loading . . .</strong>
            <div className="spinner-border spinner-border-sm text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        }
    </div>
    )
}

export default ItemList