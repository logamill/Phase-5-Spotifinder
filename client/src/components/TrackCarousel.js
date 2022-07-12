import React, {useState} from 'react';
import '../styles/track_carousel.scss';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

function TrackCarousel( props ) {
    
    const [imageIndex, setImageIndex] = useState(0)

    const NextArrow = ({onClick}) => {
        return (
            <div className='arrow next' onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div className='arrow prev' onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),

    };

    let itemsToDisplay = props.data.map((item, i) => {
        return (
            <div className={i === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={item.image} alt={item.image}/>
              <span className='info'>#{i+1} {item.name}</span>
            </div>
        )
    })

    return (
        <div className='track-carousel-container'>
            <Slider {...settings}>
                {itemsToDisplay}
            </Slider>
        </div>
    )
};

export default TrackCarousel;

