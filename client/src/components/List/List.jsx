import './List.scss';
import {ProductsData} from '../../data/ProductsData.jsx';
import Card from '../Card/Card.jsx';

const List = (catId, maxPrice, sort) =>{
    return(
        <div className='list'>
            {ProductsData?.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default List;