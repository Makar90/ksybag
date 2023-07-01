import { Link } from 'react-router-dom';
import './Navbar.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="navbar__wrapper">
                <div className="navbar__left">
                    <div className='navbar__item'>
                        <img src ="/img/Flag_of_the_United_States.svg.png" alt="" width='30px'/>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='navbar__item'>
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='navbar__item'>
                        <Link className='link' to="/products/1">Woomen</Link>
                    </div>
                    <div className='navbar__item'>
                        <Link className='link' to="/products/2">Man</Link>
                    </div>
                    <div className='navbar__item'>
                        <Link className='link' to="/products/3">Children</Link>
                    </div>
                </div>
                <div className="navbar__center">
                    <Link className='link' to="/">LAMASTORE</Link>
                </div>
                <div className="navbar__right">
                    <div className='navbar__item'>
                        <Link className='link' to="/">Homepage</Link>
                    </div>
                    <div className='navbar__item'>
                        <Link className='link' to="/about">About</Link>
                    </div>
                    <div className='navbar__item'>
                        <Link className='link' to="/contact">Contact</Link>
                    </div>
                    <div className='navbar__item'>
                        <Link className='link' to="/stores">Stores</Link>
                    </div>
                    <div className="navbar__icons">
                        <SearchIcon/>
                        <PersonOutlineIcon/>
                        <FavoriteBorderIcon/>
                        <div className="navbar__icons-iconInfo">
                            <ShoppingCartOutlinedIcon/>
                            <span>0</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;