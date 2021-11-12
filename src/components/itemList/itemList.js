import { useState, useEffect } from "react";
import Item from "../item/item.js";
import Products from "../products/products.json";

const ItemList = () => {
  const [productos, setProductos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Products);
        reject("Error");
      }, 2000);
    });
    task.then(
      (result) => {
        console.log(result);
        setProductos(result);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    task.catch((error) => {
      console.log("Catch error: " + error);
    });
  }, []);

  return (
    <div className="row">
      <div className="col">
        <div className="card-group d-flex justify-content-center">
          {productos?.map(
            ({ id, marca, nombre, descripcion, imagen, precio }) => (
              <Item
                key={id}
                id={id}
                marca={marca}
                nombre={nombre}
                descripcion={descripcion}
                imagen={imagen}
                precio={precio}
              />
            )
          )}
          {loading && (
            <div className="d-flex align-items-center m-2">
              <strong>Loading</strong>
              <div
                className="m-1 spinner-border spinner-border-sm text-primary"
                role="status"
              >
                <span className="visually-hidden" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
