import Card from "../cards/cards.js"

const ItemListContainer = (props) => {
    return (
    <div>
        <p className="fs-1">{props.greeting}</p>
        <div className="card-group">
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    </div>
    )
}

export default ItemListContainer