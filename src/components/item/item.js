import { Link } from 'react-router-dom';
import ItemDetailContainer from '../itemDetailContainer/itemDetailContainer.js';

const Item = () => {
    
    return (
        <Link to={`/item/:id`}>
            <ItemDetailContainer />
        </Link>
    )
}



export default Item