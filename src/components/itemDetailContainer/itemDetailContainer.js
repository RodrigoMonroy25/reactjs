import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react"
import Products from '../products/products.json'
import ItemDetail from "../itemDetail/itemDetail"

const ItemDetailContainer = () => {
    //const {itemId} = useParams();
    const [productos, setProductos] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect (() => {
        const task = new Promise ((resolve, reject) => {
            setTimeout(() => {
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
        <BrowserRouter>
            <Routes>
                <Route path = "/item/:id">
                    <div className="card-group">
                        {productos?.map(({id, marca, nombre, descripcion, imagen, precio}) => (
                            <ItemDetail key={id} marca={marca} nombre={nombre} descripcion={descripcion} imagen={imagen} precio={precio} />
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
                </Route>
            </Routes>
        </BrowserRouter>
    );

}

export default ItemDetailContainer