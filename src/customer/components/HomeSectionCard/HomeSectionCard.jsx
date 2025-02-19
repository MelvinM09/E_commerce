import React from 'react';
import PropTypes from 'prop-types';

const HomeSectionCard = ({ product, onClick }) => {
    return (
        <div
            className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
            overflow-hidden w-[15rem] mx-3 border transition-transform duration-300 hover:scale-105 hover:shadow-xl'
            onClick={() => {
                console.log('Card clicked:', { id: product.id, Brand: product.Brand, Title: product.Title });
                onClick(); // Call the parent handler
            }}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${product.Brand} ${product.Title}`}
        >
            {/* Image Section */}
            <div className='h-[13rem] w-[10rem]'>
                <img
                    className='object-cover object-top w-full h-full'
                    src={product.imageUrl || 'https://via.placeholder.com/150'} // Fallback image if no imageUrl is provided
                    alt={`${product.Brand} ${product.Title}`}
                    loading="lazy" // Lazy load the image for better performance
                />
            </div>

            {/* Product Details Section */}
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>{product.Brand}</h3>
                <p className='mt-2 text-sm text-gray-500'>{product.Title}</p>
            </div>
        </div>
    );
};

// Define PropTypes for type-checking
HomeSectionCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        imageUrl: PropTypes.string,
        Brand: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default HomeSectionCard;