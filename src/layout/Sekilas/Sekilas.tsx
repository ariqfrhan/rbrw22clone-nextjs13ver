'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import Heading from '@/components/Heading/Heading'
import { motion } from 'framer-motion'
import VideoYT from '@/components/Video/VideoYT'
import { apiVideo } from '@/lib/api'

const VideoLink = [
    {
        link: "8T7syCDLytA",
        title: "Sambutan Rektor",
    },
    {
        link: "QSXYlrcKPa4",
        title: "Teaser RAJA BRAWIJAYA 2022",
    },
    {
        link: "OaxknaaEtjY",
        title: "Sidak Mahasiswa Universitas Brawijaya",
    },
    {
        link: "04eVOzp7FFk",
        title: "Koreo Flashmob Gelora Brawijaya",
    },
    {
        link: "BAc0cW51cQ8",
        title: "Jingle RAJA BRAWIJAYA 2022",
    },
]


export default function Sekilas() {
    const swiperHook = useSwiper();
    const [video, setVideo] = useState(VideoLink);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiVideo().
            then(res => {
                if (res.data.length > 0) {
                    setVideo(res.data);
                }
            })
            .catch(err => { })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    return (
        <div className='relative'>
            <div className={`container mx-auto bg-left-bottom flex-cover flex-col justify-center bg-white`}>
                <Heading top='Sekilas' bottom='RAJA Brawijaya' direction='right'>

                </Heading>
            </div>
            <div className="bg-blue pt-24 pb-12 mt-10 md:mt-[100px] lg:mt-[200px] px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem]">
                {loading ? (
                    <div className='w-full animate-pulse space-y-5 mt-5'>
                        {Array.from(Array(2).keys()).map(i =>(
                            <div key={i} className='flex flex-col w-full relative space-y-2' >
                                <div className='h-80 bg-gray-200 rounded-xl dark:bg-gray-500 w-full'></div>
                                <div className='h-10 bg-gray-200 rounded-xl dark:bg-gray-500 w-full'></div>
                            </div>
                        ))}
                    </div>
                    
                ) : (
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={10}
                        pagination={{
                            type: "progressbar",
                        }}
                        navigation ={{
                            nextEl: ".swipe-next-c",
                            prevEl: ".swipe-prev-c",
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView:1,
                            },
                            767.8:{
                                slidesPerView: 2,
                                spaceBetween: 10,
                            }
                        }}
                        className='cursor-pointer py-10'
                    >
                        {video.map((item,index) =>(
                            <SwiperSlide key={index}>
                                <VideoYT id={item.link} name={item.title}></VideoYT>
                            </SwiperSlide>
                        ))}
                        <motion.button 
                            whileHover={{
                                x:-10
                            }}
                            transition={{
                                duration:0.5,
                            }}
                            className='absolute swipe-prev-c bottom-0 md:bottom-0 left-0 z-50 text-white'
                        > &larr; Geser Ke Kiri</motion.button>
                        <motion.button 
                            whileHover={{
                                x:10
                            }}
                            transition={{
                                duration:0.5,
                            }}
                            className='swipe-next-c  absolute bottom-0 md:bottom-0 right-0 z-50 text-white'
                        > Geser Ke Kanan &rarr;</motion.button>

                    </Swiper>
                )}
            </div>

            <img className='top-0 absolute md:object-cover md:object-top w-full'
            src='/assets/images/roketSekilasRaja.png' alt=''>
            </img>
        </div>
    )
}
