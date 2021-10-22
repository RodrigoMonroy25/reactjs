import { useState } from 'react'

const ItemCount = (prop) => {
    const [counter, setCounter] = useState (0);
    const onAdd = () => {
        if (counter < prop.stock) {
        setCounter(counter + 1);
        }    
    }
    const onRemove = () => {
        if (counter > 0){
            setCounter(counter - 1)
        }
    }
    return (
    <div className="d-flex justify-content-center align-middle">
        <button className="btn btn-sm btn-dark fw-bold " onClick={onAdd}> + </button> {/* Add */}
        <p className="fs-6 fw-light"> {counter} </p>
        <button className="btn btn-sm btn-dark fw-bold" onClick={onRemove}> - </button> {/* Subtract */}
    </div>
    )
}

export default ItemCount