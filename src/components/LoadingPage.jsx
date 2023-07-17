"use client"
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Background } from '../constants/Images'
import {motion} from 'framer-motion'

export default function loading() {
  return (
    <>
    <div className='h-screen flex justify-center items-center flex-col'>
        <div className='w-full h-screen absolute flex-row overflow-hidden opacity-10 drop-shadow-md'>
            <Image
                src={Background.CandiHijau}
                layout='fill'
                objectFit='cover'
                alt='rabraw'
            ></Image>
        </div>
        <motion.img
            src='/assets/logo/logoFull.png'
            className='h-2/5 cursor-pointer'
            animate = {{
                scale: [1, 1.10 ,1],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
            }}
        >
        </motion.img>
        <div className='text-center mt-4 py-2 text-blue font-agrandir font-bold text-2xl md:text-4xl sm:text-3xl lg:text-5xl'>
            Tunggu ya kids webnya masih loading
        </div>
    </div>
    </>
  )
}
