import React from 'react'
import style from './Jumbotron.module.css'

export default function Jumbotron() {
    return (
        <>
            <div className='relative h-screen overflow-y-hidden'>
                <div className={`relative w-full h-screen ${style.video}`}>
                    <video muted={true} className='object-cover z-10 w-full h-full' autoPlay={true} loop controls={false}>
                        <source src='/assets/videos/v.mp4' type='video/mp4' />
                    </video>
                </div>
                <div className='absolute inset-0'>
                    <div className='container mx-auto relative flex flex-col h-full lg:flex-row lg:items-center'>
                        <div className=''>
                            <h1 className='font-droid mt-52 lg:mt-0 text-6xl md:text-[120px] lg:w-4/6 text-white'>
                                RAJA Brawijaya
                            </h1>
                            <hr className='h-1 mt-3 lg:mt-5 stroke-0 rounded-full bg-white'></hr>
                            <p className='text-white text-lg mt-3 md:text-xl font-poppins'>
                                Rangkaian Acara Jelajah Almamater Universitas Brawijaya
                            </p>
                        </div>
                        <h2 className={`relative text-8xl md:text-[146px] mt-28 lg:mt-0 font-droid text-white lg:rotate-90 lg:-right-40 `}>
                            2023
                        </h2>
                    </div>
                </div>
                <img src='/assets/images/jumbotron.png' className='w-full object-cover absolute lg:-bottom-20 -bottom-1' />
            </div>
        </>
    )
}
