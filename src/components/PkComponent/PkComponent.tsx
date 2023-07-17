import React from 'react'

type pkComponentProps = {
    name : string,
    line : string,
    img : string,
    instagram : string,
    twitter : string,
    telegram : string,
    tiktok : string,
    youtube : string,
    spotify : string,
    description : string,
}

export default function PkComponent( {
    name,
	line,
	img,
	instagram,
	twitter,
	telegram,
	tiktok,
	youtube,
	spotify,
	description, 
} : pkComponentProps) {
  return (
    <>
        <div className='container mx-auto gap-12 md:flex lg:mt-16'>
            <div className="pt-10">
                <div className="w-full h-full rounded-full bg-white lg:mr-32">
                    <img src={img} className='rounded-full object-cover object-center'></img>
                </div>
            </div>
            <div>
                <h2 className="text-grey text-center md:text-start text-4xl lg:text-6xl font-agrandir font-semibold mt-8 md:mt-12">
                    {name}
                </h2>
                <p className='text-white text-justify font-poppins mt-4 lg:text-xl lg:mt-6'
                dangerouslySetInnerHTML={{__html: description}}
                ></p>
            </div>
        </div>
        <div className='flex flex-wrap w-2/3 justify-center mx-auto mt-6 lg:mt-16'>
            {line!=null &&(
                <a target='_blank' href={line}>
                    <img className='w-10 lg:w-14 m-1'
                        src='/assets/icons/li.svg'
                        alt=''
                    ></img>
                </a>
            )}
            {instagram!=null &&(
                <a target='_blank' href={instagram}>
                    <img className='w-10 lg:w-14 m-1'
                        src='/assets/icons/ig.svg'
                        alt=''
                    ></img>
                </a>
            )}
            {twitter!=null &&(
                <a target='_blank' href={twitter}>
                    <img className='w-10 lg:w-14 m-1'
                        src='/assets/icons/li.svg'
                        alt=''
                    ></img>
                </a>
            )}
            {telegram!=null &&(
                <a target='_blank' href={telegram}>
                    <img className='w-10 lg:w-14 m-1'
                        src='/assets/icons/li.svg'
                        alt=''
                    ></img>
                </a>
            )}
            {tiktok!=null &&(
                <a target='_blank' href={tiktok}>
                    <img className='w-10 lg:w-14 m-1'
                        src='/assets/icons/tik.svg'
                        alt=''
                    ></img>
                </a>
            )}
            {youtube!=null &&(
                <a target='_blank' href={twitter}>
                    <img className='w-10 lg:w-14 m-1'
                        src='/assets/icons/yt.svg'
                        alt=''
                    ></img>
                </a>
            )}
            {spotify!=null &&(
                <a target='_blank' href={telegram}>
                    <img className='w-10 lg:w-14 m-1'
                        src='/assets/icons/spo.svg'
                        alt=''
                    ></img>
                </a>
            )}
        </div>
    </>
  )
}
