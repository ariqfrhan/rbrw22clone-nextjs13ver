import React from 'react'
import Image from 'next/image';
import { Background } from '../../constants/Images';


export default function NewsDetail({date, slug, title, description, thumbnail}) {
  return (
    <div className='p-5 rounded-lg bg-white shadow-sm bg-opacity-50 w-full'>
        <div className='rounded-lg bg-white pb-5 bg-opacity-50 relative'>
            <div className='p-8 lg:p-20'>
                <div className='bg-green p-5 rounded-lg mb-5'>
                    <h1 className='text-3xl text-white font-semibold py-2 pb-5 text-center'>
                        {title}
                    </h1>
                    <img src={thumbnail} alt='thumbnail' className='w-full h-1/5 border border-white'></img>
                    <div dangerouslySetInnerHTML={{__html:description}} className='text-white text-sm font-regular py-5'></div>
                </div>
                <div className='flex justify-end'>
                    <div className='w-1/2 h-auto'>
                        <Image
                            src={Background.Feather}
                            layout='responsive'
                            objectFit='cover'
                            alt='RAJA Brawijaya'
                        ></Image>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}
