import React from 'react'
import Image, { StaticImageData } from 'next/image'

type RangkaianSwipeProps = {
    img? : string,
    name : string,
    date : string,
    children : React.ReactNode
}

export default function RangkaianSwipe({img, name, date, children} : RangkaianSwipeProps) {

    console.log(img);
  return (
    <div className='container mt-10 md:flex items-center'>
        <img src={`/assets/images/ic${img}.png`} alt='' className='w-2/3 md:w-1/2 mx-auto'></img>
        {/* <Image src={`${img}`} width={'110'} height={'50'} alt='kosong gan' className='w-2/3 md:w-1/2 mx-auto'></Image> */}
        <div className='mt-6'>
            <h5 className='font-agrandir text-white text-center text-4xl md:text-start md:text-6xl font-semibold'>
                {name}
            </h5>
            <h3 className='text-white text-lg text-center font-agrandir lg:text-start lg:text-3xl'>
                {date}
            </h3>
            <p className='text-white text-base text-justify font-poppins mt-4 lg:text-xl lg:mt-6'>
                {children}
            </p>
        </div>
    </div>
  )
}
