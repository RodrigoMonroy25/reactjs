import ItemCount from '../itemCount/itemCount.js';

const Item = () => {
    const task = new Promise ((resolve, reject) => {
        resolve (Item)
        reject ("Error")
    });
    task.then(
        (result) => {
            console.log("Items cargados")
        },
        (err) => {
            console.log(err)
        }
    );
    task.catch ((err) =>{
        console.log("Catch error: " + err)
    });
    return (
        <div className="card bg-light mb-3">
            <image className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Nombre producto</h5>
                <image src=""/>
                <h5 className="badge bg-secondary">$ Precio</h5>
                <p className="card-text">Descripción o contenido de la tarjeta del producto</p>
                <ItemCount stock="5" /> {/* Se inserta contador con stock = 5 */}
                <a href="..." className="btn btn-primary mt-1">Agregar al carrito</a>
            </div>
        </div>
    )
}


export default Item