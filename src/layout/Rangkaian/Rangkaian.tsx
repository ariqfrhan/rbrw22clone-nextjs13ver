'use client'
import React from 'react'
import Heading from '@/components/Heading/Heading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import RangkaianSwipe from '@/components/RangkaianSwipe/RangkaianSwipe'


export default function Rangkaian() {
  return (
    <div className='bg-blue py-24'>
      <Heading top='Rangkaian' bottom='Utama' direction='center'> </Heading>

      <Swiper
        className='relative'
        modules={[Navigation]}
        navigation={{

        }}
        keyboard
        slidesPerView={1}>
        <SwiperSlide>
          <RangkaianSwipe
            name='PPKMB'
            img='PKKMB'
            date='16 Agustus - 18 Agustus 2022'
          >
            PKKMB atau Pengenalan Kehidupan Kampus Baru Mahasiswa Baru
            Universitas Brawijaya merupakan kegiatan penyambutan mahasiswa baru
            yang bertujuan untuk mengenal lebih dekat Universitas Brawijaya
            dengan harapan terbentuk rasa cinta dan rasa bangga akan
            almamaternya.
          </RangkaianSwipe>
        </SwiperSlide>
        <SwiperSlide>
          <RangkaianSwipe
            name='PPKMB'
            img='OH'
            date='16 Agustus - 18 Agustus 2022'
          >
            PKKMB atau Pengenalan Kehidupan Kampus Baru Mahasiswa Baru
            Universitas Brawijaya merupakan kegiatan penyambutan mahasiswa baru
            yang bertujuan untuk mengenal lebih dekat Universitas Brawijaya
            dengan harapan terbentuk rasa cinta dan rasa bangga akan
            almamaternya.
          </RangkaianSwipe>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
