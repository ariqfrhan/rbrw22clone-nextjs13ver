import { useEffect } from "react"
import React from 'react'
import style from './Heading.module.css'

import "aos/dist/aos.css";
import Aos from "aos";


type HeadingProps = {
    children : React.ReactNode;
    top: string;
    bottom: string;
    direction: string;
}

export default function Heading({ top, bottom, direction }: HeadingProps) {
    return (
        <div className={`flex items-center cursor-pointer
    flex-col drop-shadow-md w-fot ${direction == 'center' ? 'mx-auto' : ''}
    ${direction == 'right' ? 'ml-auto' : ''}`}>
            <div className="flex items-center justify-center mx-auto w-fit">
                <img className="w-[45px] md:w-[52px] lg:w-[120px]"
                    src="/assets/images/awan.png"
                ></img>
                <h1 className={`font-agrandir font-bold text-3xl lg:text-7xl md:text-5xl
            }`}>
                    {top}
                </h1>
                <img className={`w-[45px] md:w-[52px] lg:w-[120px] ${style.reverse}`}
                src="/assets/images/awan.png"
                ></img>
            </div>
            <div>
                <h1 className="text-yellow font-agrandir font-bold text-3xl lg:text-7xl md:text-5xl">
                    {bottom}
                </h1>
            </div>
        </div>
    )
}
