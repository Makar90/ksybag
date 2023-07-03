import './Product.scss';

import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceSharpIcon from '@mui/icons-material/BalanceSharp';

const Product = () =>{

    const images= [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcUu88moBxjXpxJPpQ55lh4hFHWi7VIKg1Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIz25_DQaRtSLHzf7w21leloRxABEZwC0qg&usqp=CAU",
    ]

    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] =useState(1);

    return(
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt=""/>
                </div>
            </div>
            
            <div className="right">
                <h1>Title</h1>
                <span>19.99$</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Iusto rerum nostrum voluptate vitae quos voluptas, 
                    quo soluta perspiciatis laboriosam. Aliquam?
                </p>
                <div className="quantity">
                    <button onClick={()=>setQuantity(prev=>(prev === 1 ? 1 : prev-1))}>-</button>
                    {quantity}
                    <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
                </div>
                <button className='add'>
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderOutlinedIcon/> ADD TO WISH
                    </div>                
                    <div className="item">
                        <BalanceSharpIcon/> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-shirt</span>
                    <span>Tag: T-shirt, Woman, Top</span>
                </div>
                <hr/>
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr/>
                    <span>ADDITIONAL INFORMATION</span>
                    <hr/>
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product;