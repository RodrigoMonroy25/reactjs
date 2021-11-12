import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Products from "../products/products.json";
import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Products);
        reject("Error");
      }, 2000);
    });
    task.then(
      (result) => {
        itemId
          ? setProductos(result.find((productos) => productos.id === itemId))
          : setProductos(Products);
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
    task.catch((error) => {
      console.log("Catch error: " + error);
    });
  }, [itemId]);

  return (
    <div className="m-2 d-flex justify-content-center">
      {productos ? (
        <ItemDetail
          key={productos.id}
          id={productos.id}
          marca={productos.marca}
          nombre={productos.nombre}
          descripcion={productos.descripcion}
          imagen={productos.imagen}
          precio={productos.precio}
        />
      ) : (
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
  );
};

export default ItemDetailContainer;
