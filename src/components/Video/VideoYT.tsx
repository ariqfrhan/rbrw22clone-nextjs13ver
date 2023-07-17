import React from 'react'

type videoProps = {
    id : string,
    name : string,
}

export default function VideoYT({id, name} : videoProps) {
  return (
    <>
        <div className='w-full md:pr-0'>
            <iframe width={'100%'} className='rounded-lg h-[200px] lg:h-[400px]' src={`https://www.youtube.com/embed/${id}`} 
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            <h1 className='font-agrandir text-2xl lg:text-4xl mt-4 pb-20 text-white'>
                {name}
            </h1>
        </div>
    </>
  )
}
