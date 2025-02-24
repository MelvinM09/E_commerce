import React from 'react'
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <div className='ProductCard w-[15rem] m-3 transition-all cursor-pointer text-left'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60 '>{product.Brand}</p>
          <p className=''>{product.Title}</p>
        </div>
        <div className='flex item-center space-x-2'>
          <p className='font-semibold'>{product.DiscountedPrice}rs</p>
          <p className='line-through opacity-50'>{product.Price}</p>
          <p className='text-green-600 font-semibold'>{product.DiscountedPresent}% off</p>
        </div>

      </div>
    </div>
  )
}

export default ProductCard