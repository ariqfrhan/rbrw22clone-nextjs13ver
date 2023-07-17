'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AddicitaBox() {
    return (
        <div className='py-24 bg-white'>
            <div className='container'>
                <div className='bg-primary rounded-lg p-10 lg:flex lg:items-center'>
                    <div className='w-1/2 mx-auto lg:w-1/4 lg:ml-10'>
                        <h4 className='text-white text-4xl font-agrandir font-semibold lg:text-start lg:text-6xl lg:w-1/2'>
                            Adicitta <span className='opacity-50'>Info</span></h4>
                        <Link href={'/adicitta-info'}>
                            <button className='px-4 py-2 mt-3 bg-orange text-white rounded-lg font-poppins lg:block hover: cursor-pointer  duration-300'>
                                Lihat Lainnya
                            </button>
                        </Link>
                    </div>
                    <div className='md:flex md:mt-6 lg:w-3/4 lg:justify-center'>
                        <Link href={'/adicitta-info/twibbon'}>
                            <div className='mx-auto md:w-full lg:mx-10 md:mx-3 mt-10 md:mt-0'>
                                <div className='mx-auto md:w-full lg:mx-10 md:mx-3 mt-10 md:mt-0'>
                                    <div className='group'>
                                        <motion.button
                                            whileHover={{
                                                scale: 1.05,
                                                transition: {
                                                    duration: 0.5
                                                }
                                            }} className='bg-white rounded-lg shadow-2xl flex justify-center items-center'>
                                            <img src='/assets/icons/icTwibbon.svg'></img>
                                        </motion.button>
                                    </div>
                                    <h4 className='font-agrandir text-center text-2xl text-white mt-4 lg:ms-4'>Twibbon</h4>
                                </div>
                            </div>
                        </Link>
                        <Link href={'/adicitta-info/twibbon'}>
                            <div className='mx-auto md:w-full lg:mx-10 md:mx-3 mt-10 md:mt-0'>
                                <div className='mx-auto md:w-full lg:mx-10 md:mx-3 mt-10 md:mt-0'>
                                    <div className='group'>
                                        <motion.button
                                            whileHover={{
                                                scale: 1.05,
                                                transition: {
                                                    duration: 0.5
                                                }
                                            }} className='bg-white rounded-lg shadow-2xl flex justify-center items-center'>
                                            <img src='/assets/icons/icTwibbon.svg'></img>
                                        </motion.button>
                                    </div>
                                    <h4 className='font-agrandir text-center text-2xl text-white mt-4 flex lg:ms-4'>Twibbon</h4>
                                </div>
                            </div>
                        </Link>
                        <Link href={'/adicitta-info/twibbon'}>
                            <div className='mx-auto md:w-full lg:mx-10 md:mx-3 mt-10 md:mt-0'>
                                <div className='mx-auto md:w-full lg:mx-10 md:mx-3 mt-10 md:mt-0'>
                                    <div className='group'>
                                        <motion.button
                                            whileHover={{
                                                scale: 1.05,
                                                transition: {
                                                    duration: 0.5
                                                }
                                            }} className='bg-white rounded-lg shadow-2xl flex justify-center items-center'>
                                            <img src='/assets/icons/icTwibbon.svg'></img>
                                        </motion.button>
                                    </div>
                                    <h4 className='font-agrandir text-center text-2xl text-white mt-4 flex lg:ms-4'>Twibbon</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
