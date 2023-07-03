import './Products.scss';
import List from '../../components/List/List.jsx';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


const Products = () =>{

    const catId = parseInt(useParams().id);
    //console.log(useParams());
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort]= useState(null);    

    return(
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="12" value={2} />
                        <label htmlFor="12">Skirts</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3} />
                        <label htmlFor="3">Coats</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" value={maxPrice} min="0" max = "1000" onChange={(e)=>setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort('asc')}/>
                        <label htmlFor="asc">Price (Lowest price)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc" value="desc" name="price"  onChange={e=>setSort('desc')}/>
                        <label htmlFor="desc">Price (Higest price)</label>
                    </div>
                </div>

            </div>
            <div className="right">
                <img className='catImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4cfMo3m3NGO5_esOY0Mgoc9T6t_Vdmzs_w&usqp=CAU" alt="" />
                <List catId= {catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    )
}

export default Products;