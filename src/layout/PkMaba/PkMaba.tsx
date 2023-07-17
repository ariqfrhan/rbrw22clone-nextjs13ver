'use client'
import React, { useState } from 'react'
import pkData from '../../constants/pkData'
import PkComponent from '@/components/PkComponent/PkComponent';
import Heading from '@/components/Heading/Heading';
import Dropdown from '@/components/Dropdown/Dropdown';

export default function Pkmaba() {
    const [active, setActive] = useState('PK2MABA FILKOM_ID');

    const getData = () => {
        const filteredData = pkData.filter((e) => e.id === active);
        return filteredData.length > 0 ? filteredData[0] : null;
    };

    return (
        <div className='-mt-10 md:-mt-24 absolute bg-blue'>
            <img src='/assets/images/wavepk.svg' className='w-full'></img>
            <div className='bg-sea py-24'>
                <Heading top='Ragam' bottom='Brawijaya' direction='center'>
                </Heading>
                <Dropdown
                    setActive={(e) => {
                        setActive(e);
                    }}
                    data={pkData ?? []}
                    active={getData()?.fakultas ?? ''}
                >
                </Dropdown>
                <PkComponent
                    name={getData()?.name ?? ''}
                    description={getData()?.description ?? ''}
                    img={getData().img == undefined ? "/assets/UB.png" : getData().img}
                    spotify={getData().spotify}
                    youtube={getData().youtube}
                    tiktok={getData().tiktok}
                    telegram={getData().telegram}
                    twitter={getData().twitter}
                    instagram={getData().instagram}
                    line={getData().line}
                >

                </PkComponent>
            </div>
        </div>
    )
}
