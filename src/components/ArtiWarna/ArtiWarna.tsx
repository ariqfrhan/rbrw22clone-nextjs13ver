import React from 'react'

type ArtiWarnaProps = {
    color: string,
    makna: string,
}

export default function ArtiWarna({color, makna} : ArtiWarnaProps) {
  return (
    <div className='flex p-3'>
        <div className={`w-5 mr-1 h-5 rounded-full`} style={{background : color}}></div>
        <p className='font-poppins'>{makna}</p>
    </div>
  )
}
