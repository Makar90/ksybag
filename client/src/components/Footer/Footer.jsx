import './Footer.scss';


const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer__top">
                <div className="footer__item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>

                <div className="footer__item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>

                <div className="footer__item">
                    <h1>About</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quae officiis eius fuga omnis velit eos quibusdam voluptas 
                         veniam! Tempora, modi.
                    </span>
                </div>

                <div className="footer__item">
                    <h1>Contacts</h1>                    
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quae officiis eius fuga omnis velit eos quibusdam voluptas 
                         veniam! Tempora, modi.
                    </span>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-left">
                    <span className="logo">LAMADEV</span>
                    <span className="copyright">Copyright 2023. All Rights Reserved</span>
                </div>
                <div className="footer__bottom-right">
                    <img src="/img/payment-methods-epicerie-ludo.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer;