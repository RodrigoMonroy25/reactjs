import { useEffect, useState } from "react"
import Products from '../products/products.json'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)
    useEffect (() =>{
        const task = new Promise ((resolve, reject) => {
            setTimeout(() =>{
                resolve(Products);
                reject("Error");
            }, 2000)
            task.then (
                (result) => {
                    console.log(result);
                    setProductos(result);
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
        })
    }, []);

    return (
        <div>
            {productos?.map(({id, marca, nombre}) => (
                <Products key={id} marca={marca} nombre={nombre} />
            ))}
            {<h1> Loading... </h1>}
        </div>
    );

}

export default ItemDetailContainer