import { Link } from "react-router-dom";

const Item = (product) => {

  return (
    <div>
      <div className="card bg-light mb-3 mx-2" style={{ maxWidth: "220px", minHeight: "300px" }}>
        <Link to={`/item/${product.id}`}>
          <image className="card-img-top img-fluid" src={product.image} alt="Card image"/>
        </Link>
        <div className="card-body">
          <Link to={`/item/${product.id}`}>
            <h5 className="fs-3 card-title text-center text-dark">
              {product.brand} - {product.name}
            </h5>
          </Link>
          <div className="d-flex justify-content-center">
            <h5 className="fs-6 badge bg-secondary"> $ {product.price} </h5>
          </div>
          <div className="d-flex justify-content-center">
            <Link to={`/item/${product.id}`} className="fs-6 btn btn-primary mt-1">
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
