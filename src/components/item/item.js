import ItemCount from '../itemCount/itemCount.js';
import ItemDetailContainer from '../itemDetailContainer/itemDetailContainer.js';

const Item = () => {
    
    return (
        <>
            <ItemDetailContainer />
            <ItemCount stock="5" /> {/* Se inserta contador con stock = 5 */}
            <a href="..." className="btn btn-primary mt-1">Agregar al carrito</a>
        </>
    )
}



export default Item