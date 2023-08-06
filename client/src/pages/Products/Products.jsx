import './Products.scss';
import List from '../../components/List/List.jsx';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';


const Products = () =>{

    const catId = parseInt(useParams().id);
    //console.log(useParams());
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort]= useState(null); 
    const [selectedSubCats, setSelectedSubCats] = useState([]); 

    
    const {data, loading, error} = useFetch (`/sub-categories?[filters][categories][id][$eq]=${catId}`);
    //console.log(data);

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        setSelectedSubCats (
            isChecked 
                ? [...selectedSubCats, value] 
                : selectedSubCats.filter((item) => item !== value)
        );
    }
    console.log(selectedSubCats);

    return(
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    {data?.map((item) => (                    
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange = {handleChange} />
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>
                    ))}
                    
                    {/* 
                    <div className="inputItem">
                            <input type="checkbox" id="1" value={1} />
                            <label htmlFor="1">Shoes</label>
                        </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2} />
                        <label htmlFor="12">Skirts</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3} />
                        <label htmlFor="3">Coats</label>
                    </div> */}

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
                <img className='catImg' src="https://cdn.hswstatic.com/gif/red-carpet-dresses-2.jpg" alt="" />
                <List catId= {catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
            </div>
        </div>
    )
}

export default Products;