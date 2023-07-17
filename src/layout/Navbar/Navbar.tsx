import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import {usePathname} from 'next/navigation'
import Image from 'next/image';
import styles from './Navbar.module.css'

export default function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [show, setShow] = useState(false);
    const [active, setActive] = useState('beranda');

    const pathname = usePathname();

    const changeOnScroll = () => {
        window.scrollY >= 200 ? setScrolled(true) : setScrolled(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeOnScroll);
        return () => {
            window.removeEventListener('scroll', changeOnScroll)
        }
    })


    return (
        <div className={`${pathname !== '/' ? 'bg-white' : scrolled ? 'bg-primary transition duration-300' : 'bg-transparent'}
        fixed w-full py-2 top-0 z-50 flex items-center`}>
            <div className='container mx-auto flex items-center justify-between'>
                <div className='flex justify-between items-center hover:cursor-pointer w-full lg-w-fit'>
                    <div className=''>
                        <Link href={'/'}>
                            <Image
                                src={`/assets/${pathname !== '/' ? 'logoDark' : 'logo'}.png`}
                                alt='logo'
                                objectFit='cover'
                                width={107}
                                height={111}
                            ></Image>
                        </Link>
                    </div>
                </div>
                <button
                    type='button'
                    className='w-6 h-6 lg:hidden'
                    onClick={() => {
                        if (!show) {
                            setShow(true);
                        } else {
                            setShow(false);
                        }
                    }}
                >
                    {!show && (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className={` opacity-50 ${pathname !== '/' ? 'fill-blue' : 'fill-white'}`}
                            viewBox='0 0 448 512'
                        >
                            <path d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z' />
                        </svg>
                    )}
                    {show && (
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' className='opacity-50 fill-white'>
                            <path d='M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z' />
                        </svg>
                    )}
                </button>
            </div>

            <div className={`flex lg:static grow gap-12 lg:justify-between fixed flex-col lg:flex-row top-0 bottom-0
            ${show ? 'left-20 right-0' : 'left-full -right-10'} px-8 bg-secondary lg:bg-trans top-[80px] md:top-[90px] transition-all duration-500`}>
                <Link href={'/'}
                    className={`font-agrandir whitespace-nowrap ${pathname !== '/' ? 'text-primary' : 'text-white'} my-4 relative 
                font-semibold ${styles.a} ${pathname == '/' ? styles.active : ''} `}>
                    Beranda
                </Link>
                <Link href={'/adicitta-info'}
                    className={`font-agrandir whitespace-nowrap ${pathname !== '/' ? 'text-primary' : 'text-white'} my-4 relative 
                font-semibold ${styles.a} ${pathname == '/adicitta-info' ? styles.active : ''} `}>
                    Adicitta Info
                </Link>
                <Link href={'peta-brawijaya'}
                    className={`font-agrandir whitespace-nowrap ${pathname !== '/' ? 'text-primary' : 'text-white'} my-4 relative 
                font-semibold ${styles.a} ${pathname == '/peta-brawijaya' ? styles.active : ''} `}>
                    Peta Brawijaya
                </Link>
                <Link href={'/galeri'}
                    className={`font-agrandir whitespace-nowrap ${pathname !== '/' ? 'text-primary' : 'text-white'} my-4 relative 
                font-semibold ${styles.a} ${pathname == '/galeri' ? styles.active : ''} `}>
                    Galeri
                </Link>
                <Link href={'/faq'}
                    className={`font-agrandir whitespace-nowrap ${pathname !== '/' ? 'text-primary' : 'text-white'} my-4 relative 
                font-semibold ${styles.a} ${pathname == '/faq' ? styles.active : ''} `}>
                    FAQ
                </Link>
                <Link href={'/ukm'}
                    className={`font-agrandir whitespace-nowrap ${pathname !== '/' ? 'text-primary' : 'text-white'} my-4 relative 
                font-semibold ${styles.a} ${pathname == '/ukm' ? styles.active : ''} `}>
                    UKM
                </Link>
                <a href='/rajaapps' target='_blank'>
                    <button className='lg:hidden bg-secondary bg-trans border-2 py-2 px-4 normal-case font-agrandir rounded-lg'>
                        Raja Apps
                    </button>
                </a>
            </div>

            <div className='w-full'>
                <a href='/rajaapps' target='_blank'>
                    <button className={`hidden lg:block bg:trans border-2 px-4 py-2 rounded-lg ${pathname !== '/' ? 'text-blue border-blue' : 'text-white border-white'}`}>
                        RAJA Apps
                    </button>
                </a>
            </div>
        </div>
    )
}
