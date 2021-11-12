import ItemList from "../itemList/itemList.js";

const ItemListContainer = (props) => {
  return (
    <div className="mt-3 d-flex justify-content-center">
      <h1>{props.greeting}</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
