import React from 'react';
import { mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './MainCarousel.css'; // Import custom CSS for styling

export const MainCarousel = () => {
    const items = mainCarouselData.map((item) => (
        <img
            className="carousel-image cursor-pointer"
            role="presentation"
            src={item.image}
            alt=""
        />
    ));

    return (
        <div className="carousel-container">
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={3000} // Adjust autoplay interval as needed
                infinite
                mouseTracking
            />
        </div>
    );
};

export default MainCarousel;