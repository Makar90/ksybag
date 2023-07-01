import './Slider.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useState } from 'react';

const Slider = () =>{
    const data = [
        'https://klike.net/uploads/posts/2019-07/1563795460_1.jpg',
        'https://klike.net/uploads/posts/2020-06/1591254382_2.jpg',
        'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg',
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () =>{
        setCurrentSlide (currentSlide === 0 ? data.length-1 : (prev) => prev - 1);
        console.log(currentSlide);
    };

    const nextSlide = () =>{
        setCurrentSlide (currentSlide === data.length-1 ? 0 : (prev) => prev + 1);
        console.log(currentSlide);
    };

    return(
        <div className='slider'>
            <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
                <img src={data[0]} alt=""/>
                <img src={data[1]} alt=""/>
                <img src={data[2]} alt=""/>
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackOutlinedIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardOutlinedIcon/>
                </div>
            </div>            
        </div>
    )
}

export default Slider;