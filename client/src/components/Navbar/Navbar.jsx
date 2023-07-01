import { Link } from 'react-router-dom';
import './index.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Navbar = () =>{
    return(
        <div className="navbar">Navbar
            <div className="wrapper">
                <div className="left">
                    <div className='item'>
                        <img src ="/img/Flag_of_the_United_States.svg.png" alt="" width='30px'/>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='item'>
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='item'>
                        <Link to="/products/1">Woomen</Link>
                    </div>
                    <div className='item'>
                        <Link to="/products/2">Man</Link>
                    </div>
                    <div className='item'>
                        <Link to="/products/3">Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link to="/">LAMASTORE</Link>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Navbar;