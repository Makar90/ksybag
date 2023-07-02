import './Categories.scss';
import { Link } from 'react-router-dom';


const Categories = () =>{
    return(
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvG-MFq6pb2K2QgHzde_HsxMY_WXtTTc15sGZBJTMRkA4obQWwNIZTeVfgimv-pIojBE&usqp=CAU" alt=""/>
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CaiY3rXwcr0m-rM3s5BQSaYlmhXSBhQsQQ&usqp=CAU" alt=""/>
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQsiIVA1uKqqm4q8fPG2yMwJU7cRP6hrI7uC-JvBCwkS2kn4UeuGfL5ifHjjT4j72vCo&usqp=CAU" alt=""/>
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
            <div className="col col-large">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdc0TEXjqngQdWwqg9Gvvj7URUWoLu9nLqgw&usqp=CAU" alt=""/>
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-WbJU0L7MiWFNC-XWH6EGK5_6UoMXvSM8Q&usqp=CAU" alt=""/>
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJc6YM977K_B6imIgBbmvBNCbwiSIEmV9kgQ&usqp=CAU" alt=""/>
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Categories;