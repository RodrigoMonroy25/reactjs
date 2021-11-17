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
    <div className="d-flex justify-content-center align-items-start">
        <button className="btn btn-sm btn-dark fw-bold mx-2" onClick={onAdd}>+</button> {/* Add */}
        <p className="fs-5 fw-bold"> { counter } </p>
        <button className="btn btn-sm btn-dark fw-bold mx-2" onClick={onRemove}> - </button> {/* Subtract */}
    </div>
    )
}

export default ItemCount