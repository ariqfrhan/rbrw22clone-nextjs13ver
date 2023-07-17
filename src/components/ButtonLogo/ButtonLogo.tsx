import React from 'react'

type ButtonProps = {
    img? : string,
    setActive : (img:string) => void,
    active : string,
}

export default function ButtonLogo({img, active, setActive} : ButtonProps) {
  return (
    <button
        onClick={() =>{
            setActive(img || '');
        }}
        className='w-14 h-14 md:w-16 lg:w-24 md:h-16 lg:h-24 border-yellow border-2 rounded-lg p-1 md:p-2 lg:p-3 block mx-auto'
    >
        <div className={`w-full h-full rounded-md ${
            active == img ? 'bg-yellow' :'bg-transparent'
        }`}>
            <img src={`/assets/logo/icLogo${img}.png`} alt=''></img>
        </div>

    </button>
  )
}
