import { Link } from "react-router-dom";

const Item = (prop) => {
  return (
    <Link to={`/item/:id`}>
      <div className="card bg-light mb-3">
        <image
          className="card-img-top"
          src={prop.imagen}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="fs-4 card-title">
            {" "}
            {prop.marca} - {prop.nombre}{" "}
          </h5>
          <h5 className="fs-6 badge bg-secondary"> $ {prop.precio} </h5>
          <a href="..." className="fs-6 btn btn-primary mt-1">
            Agregar al carrito
          </a>
        </div>
      </div>
    </Link>
  );
};

export default Item;
