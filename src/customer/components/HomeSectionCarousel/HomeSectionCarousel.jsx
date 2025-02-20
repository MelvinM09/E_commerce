import React from 'react';
import PropTypes from 'prop-types';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    // Responsive settings for the carousel
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    // Function to determine the number of visible items based on screen width
    const getVisibleItems = () => {
        if (window.innerWidth >= 1024) return 5;
        if (window.innerWidth >= 720) return 3;
        return 1;
    };

    // Helper function to calculate the maximum allowed activeIndex
    const getMaxIndex = () => {
        const visibleItems = getVisibleItems();
        return Math.max(0, data.length - visibleItems);
    };

    const slidePrev = () => {
        const newIndex = Math.max(activeIndex - 1, 0);
        setActiveIndex(newIndex);
    };

    const slideNext = () => {
        const maxIndex = getMaxIndex();
        const newIndex = Math.min(activeIndex + 1, maxIndex);
        setActiveIndex(newIndex);
    };

    // Sync active index when the carousel slides programmatically
    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };

    // Handle card click event
    const handleCardClick = (product) => {
        console.log('Card clicked:', product);
    };

    // Map data to carousel items
    const items = data.map((item) => (
        <HomeSectionCard
            key={item.id}
            product={item}
            onClick={() => handleCardClick(item)}
        />
    ));

    // Button styles
    const buttonStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
        backgroundColor: 'rgba(82, 82, 84, 0.41)',
        '&:hover': {
            backgroundColor: 'rgba(159, 156, 158, 0.69)',
        },
    };

    return (
        <div className="relative px-4 lg:px-8">
            {/* Section Name */}
            <h2 className="text-2xl font-extrabold text-gray-800 py-4 text-center lg:text-left">
                {sectionName}
            </h2>
            {/* Carousel Container */}
            <div className="relative p-5 border w-full">
                {/* Carousel Component */}
                <AliceCarousel
                    key={activeIndex}
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                    animationType="fadeout"
                />
                {/* Next Button */}
                {activeIndex < getMaxIndex() && (
                    <Button
                        variant="contained"
                        onClick={slideNext}
                        sx={{
                            ...buttonStyles,
                            right: '1rem',
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowRightIcon sx={{ color: "black" }} />
                    </Button>
                )}
                {/* Previous Button */}
                {activeIndex > 0 && (
                    <Button
                        variant="contained"
                        onClick={slidePrev}
                        sx={{
                            ...buttonStyles,
                            left: '1rem',
                            transform: 'translateY(-50%) rotate(180deg)',
                        }}
                        aria-label="previous"
                    >
                        <KeyboardArrowRightIcon sx={{ color: "black" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

// PropTypes for type checking
HomeSectionCarousel.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    sectionName: PropTypes.string.isRequired,
};

export default HomeSectionCarousel;