import './List.scss';
import {ProductsData} from '../../data/ProductsData.jsx';
import Card from '../Card/Card.jsx';
import useFetch from '../../hooks/useFetch';

const List = ({subCats, catId, maxPrice, sort}) =>{

    const {data, loading, error} = useFetch (
        `/products?populate=*&[filters][categories][id]=${catId}
        ${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );
    //console.log(data);

    return(
        <div className='list'>
            {loading
                ? "loading"
                : data?.map((item) => <Card item={item} key={item.id}/>)}
        </div>
    )
}

export default List;