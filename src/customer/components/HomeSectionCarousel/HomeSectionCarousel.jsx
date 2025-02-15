import React from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@mui/material'; // Import Material-UI Button
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; // Use Right Arrow Icon

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <HomeSectionCard key={index} />);

    return (
        <div className="relative px-4 lg:px-8">
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    autoPlay
                    autoPlayInterval={3000}
                    infinite // Uncommented for infinite looping
                    disableButtonsControls
                    responsive={responsive}
                />
                {/* Next Button */}
                <Button
                    variant="contained"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '1rem',
                        transform: 'translateY(-50%)', // Center vertically
                        zIndex: 50,
                        backgroundColor: 'lightblue', // Example background color
                        '&:hover': {
                            backgroundColor: 'blue', // Hover effect
                        },
                    }}
                    aria-label="next"
                >
<KeyboardArrowRightIcon sx={{transform:"Rotateccw(90deg)",color:"black"}}/>
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '1rem',
                        transform: 'translateY(-50%) rotate(-180deg)',  // Center vertically
                        zIndex: 50,
                        backgroundColor: 'lightblue', // Example background color
                        
                        '&:hover': {
                            backgroundColor: 'blue', // Hover effect
                        },
                    }}
                    aria-label="next"
                >
<KeyboardArrowRightIcon sx={{transform:"Rotateccw(90deg)",color:"black"}}/>
                </Button>

            </div>
        </div>
    );
};

export default HomeSectionCarousel;