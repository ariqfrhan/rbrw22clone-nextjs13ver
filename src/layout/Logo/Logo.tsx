'use client'
import React, { useState, useEffect } from 'react'
import Heading from '@/components/Heading/Heading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import { motion } from 'framer-motion'
import ArtiWarna from '@/components/ArtiWarna/ArtiWarna'
import ButtonLogo from '@/components/ButtonLogo/ButtonLogo'

const data = [
    {
        id: "Full",
        simbol: "LOGO RAJA BRAWIJAYA 2022",
    },
    {
        id: "A",
        simbol: "MUKA HADAP DEPAN AGAK MIRING",
        arti: "Lambang kebijakan dan masa depan",
    },
    {
        id: "B",
        simbol: "IKON ATOM",
        arti: "Merepresentasikan Cendekiawan",
    },
    {
        id: "D",
        simbol: "SUMPING TELINGA BERBENTUK SAYAP",
        arti: "Melambangkan mereka berpendapat.",
    },
    {
        id: "H",
        simbol: "TIGA BINTANG",
        arti: "Tri Dharma Perguruan Tinggi",
    },
    {
        id: "G",
        simbol: "MAHKOTA RADEN WIJAYA",
        arti: "Raden Wijaya sebagai tokoh yang terdapat dalam lambang Universitas Brawijaya",
    },
    {
        id: "C",
        simbol: "TONGKAT JENDRAL",
        arti: "Melambangkan kebijaksanaan",
    },
    {
        id: "F",
        simbol: "GELUNG SUPIT URANG",
        arti: "Melambangkan keluhuran budi dan semagat menggapai cita.",
    },
    {
        id: "E",
        simbol: "JAMANG DENGAN 3 MAHKOTA DAN ANGKA 60 DI TENGAH",
        arti: "Angkatan 60 Universitas Brawijaya yang senantiasa menjunjung tinggi Tri Dharma Perguruan Tinggi",
    },
];

export default function Logo() {
    const [active, setActive] = useState('Full');

    useEffect(() => { }, []);

    const getData = () => {
        return data.filter(e => {
            return e.id == active;
        })[0];
    }

    return (
        <div className='py-24' id='logo'>
            <Heading direction='center' top='Filosofi' bottom='Logo RAJA Brawijaya'>
            </Heading>
            <div className='container'>
                <div className='flex flex-wrap justify-center mt-10'>
                    <ArtiWarna color='#033E50' makna='Adaptif dan Terang'></ArtiWarna>
                    <ArtiWarna color='#3E8678' makna='Kolaboratif'></ArtiWarna>
                    <ArtiWarna color='#F69534' makna='Generasi Emas'></ArtiWarna>
                    <ArtiWarna color='#E4B59B' makna='Keseriusan'></ArtiWarna>
                </div>
                <div className='mt-10'>
                    <motion.img
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        src={`/assets/logo/icLogo${active}.png`}
                        className='w-48 md:w-64 lg:w-96 -mb-10 md:-mb-14 lg:-mb-20 relative mx-auto'
                    ></motion.img>
                    <img
                        src='/assets/logo/box.png'
                        className='w-48 md:w-64 lg:w-96 mx-auto'
                        alt=''
                    />
                </div>
                <h5 className='text-orange text-center font-agrandir text-xl mb-2 mt-4 lg:text-4xl font-semibold'>
                    {getData().simbol}
                </h5>
                <p className='text-center font-poppins mb-14 lg:text-lg lg:w-8/12 lg:mx-auto'>
                    {getData().arti}
                </p>
                <div className='flex'>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            type: "progressbar",
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 4,
                            },
                            767.8: {
                                slidesPerView: 8,
                            }
                        }}
                    >
                        {data.map((e) => {
                            return (
                                <SwiperSlide key={e.id}>
                                    <ButtonLogo
                                        img={e.id}
                                        active={active}
                                        setActive={(img) => {
                                            setActive(img);
                                        }}
                                    />
                                </SwiperSlide>
                            );
                        })}
                        <div className='mb-4'></div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
