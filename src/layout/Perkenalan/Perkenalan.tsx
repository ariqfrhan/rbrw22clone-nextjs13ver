'use client'
import React from 'react'
import Heading from '@/components/Heading/Heading'
import { motion } from 'framer-motion'

export default function Perkenalan() {
    return (
        <div className='bg-white py-24'>
            <Heading direction={'center'} top='Pengenalan' bottom='RAJA Brawijaya'>  </Heading>
                <div className='container mx-auto mt-10 lg:flex lg:items-center lg:mt-20'>
                    <motion.img
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        className='md:w-8/12 mx-auto lg:w-1/2 lg:pr-10'
                        src='/assets/images/Maskot.svg'
                    >
                    </motion.img>
                    <div className='lg:pl-10'>
                        <p className='text-justify font-poppins text-grey text-sm mt-6 md:text-base lg:text-xl'>
                            <strong className="text-yellow font-bold">RAJA Brawijaya </strong>{" "}
                            atau{" "}
                            <strong className="text-yellow font-bold">
                                {" "}
                                Rangkaian Acara Jelajah Almamater Universitas Brawijaya
                            </strong>{" "}
                            merupakan serangkaian kegiatan yang bertujuan untuk memfasilitasi
                            mahasiswa baru Universitas Brawijaya untuk mengetahui hal-hal
                            terkait kehidupan kampus dimana RAJA Brawijaya terdiri dari dua
                            rangkaian yaitu PKKMB dan OH.
                        </p>
                    </div>
                </div>
        </div>
    )
}
