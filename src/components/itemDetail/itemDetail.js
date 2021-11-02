const ItemDetail = (marca, nombre, descripcion, imagen, precio) => {
    return (
    <div className="card bg-light mb-3">
        <image className="card-img-top" src={imagen} alt="Card image cap" />
        <div className="card-body">
            <h5 className="badge bg-secondary"> {precio} </h5>
            <h5 className="card-title"> {marca} {nombre} </h5>
            {/* <image src={imagen}/> */}
            <p className="card-text"> {descripcion} </p>
        </div>
    </div>
    )
}

export default ItemDetail