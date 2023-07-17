import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icons } from '@/constants/Images'


export default function NewsCardMini({ date, slug, title, description, thumbnail }) {
    return (
        <div className='p-2 rounded-lg bg-white shadow-sm cursor-pointer'>
            <Link href={slug ? `/adicitta-info/${slug}` : '/adicitta-info'}
                className={`rounded-lg bg-white pb-5 group`}>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center w-full px-5 pt-1'>
                        <div className='flex items-center drop-shadow-md'>
                            <div className='w-16 h-16'>
                                <div className='w-9/12 h-/12'>
                                    <Image
                                        src={Icons.Raja}
                                        alt='RajaLogo'
                                        layout='responsive'
                                        objectFit='contain'>
                                    </Image>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-primary font-semibold">RAJA Brawijaya</h3>
                                <h3 className="text-yellow text-sm">{date}</h3>
                            </div>
                        </div>
                        <div className='w-8 h-8 bg-yellow rounded-md p-1'>
                            <Image
                                src={Icons.Share}
                                alt='RAJA'
                                layout='responsive'
                                objectFit='cover'>
                            </Image>
                        </div>
                    </div>
                    <div className='relative h-1/2'>
                        <div className='w-full h-full bg-yellow rounded-md'>
                            <img src={thumbnail} alt='thumbnail' className='w-full h-full'></img>
                        </div>
                        <div className='bg-yellow w-full h-0 group-hover:h-full absolute bottom-0 right-0 bg-opacity-30'></div>
                    </div>
                    <div className='px-5 text-primary py-2'>
                        <h3 className='font-semibold'>{title}</h3>
                        <h5 className='text-base text-justify'>
                        {description ? description.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 150) : "Baca Selengkapnya"}...
                        </h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}
