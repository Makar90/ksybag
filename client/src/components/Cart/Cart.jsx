import './Cart.scss';
import {ProductsData} from '../../data/ProductsData.jsx';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Cart = () =>{
    

    return(
        <div className="cart">
            <h1>Products in your cart</h1>
            {ProductsData?.map(item=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,50)}</p>
                        <div className="price">
                            1 x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlineIcon className='delete' />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    )
}

export default Cart;