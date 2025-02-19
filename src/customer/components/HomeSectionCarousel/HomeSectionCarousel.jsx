import React from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomeSectionCarousel = () => {
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
        return Math.max(0, mens_kurta.length - visibleItems);
    };

    const slidePrev = () => {
        const newIndex = Math.max(activeIndex - 1, 0);
        console.log('Sliding Previous, new index:', newIndex);
        setActiveIndex(newIndex);
    };

    const slideNext = () => {
        const maxIndex = getMaxIndex();
        const newIndex = Math.min(activeIndex + 1, maxIndex);
        console.log('Sliding Next, new index:', newIndex);
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
    const items = mens_kurta.slice(0, 10).map((item, index) => (
        <HomeSectionCard
            key={index}
            product={item}
            onClick={() => handleCardClick(item)}
        />
    ));

    return (
        <div className="relative px-4 lg:px-8 border">
            <div className="relative p-5">
                {/* Carousel Component */}
                <AliceCarousel
                    key={activeIndex} // Force re-render when activeIndex changes
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
                            position: 'absolute',
                            top: '50%',
                            right: '1rem',
                            transform: 'translateY(-50%)',
                            zIndex: 50,
                            backgroundColor: 'rgba(82, 82, 84, 0.41)',
                            '&:hover': {
                                backgroundColor: 'rgba(159, 156, 158, 0.69)',
                            },
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
                            position: 'absolute',
                            top: '50%',
                            left: '1rem',
                            transform: 'translateY(-50%) rotate(180deg)',
                            zIndex: 50,
                            backgroundColor: 'rgba(82, 82, 84, 0.41)',
                            '&:hover': {
                                backgroundColor: 'rgba(159, 156, 158, 0.69)',
                            },
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

export default HomeSectionCarousel;