import './Contact.scss';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';


const Contact = () =>{
    return(
        <div className="contact">
            <div className="wrapper">
                <span>BE IN TOUCH</span>
                <div className="mail">
                    <input type="text" placeholder='Enter your e-mail...'/>
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <GoogleIcon/>
                </div>
            </div>
        </div>
    )
}

export default Contact;