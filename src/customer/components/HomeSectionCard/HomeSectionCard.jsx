import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[15rem] mx-3 '>

        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP1.0-04022025-Trendssection-winterwear-min40.jpg" alt="" />

        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
            <p className='mt-2 text-sm text-gray-500'>Men solid pure cotton Shirt</p>

        </div>

    </div>
  )
}

export default HomeSectionCard