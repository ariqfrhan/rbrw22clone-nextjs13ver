import React from 'react'

export default function DropFaq(props) {
  return (
    <button
        key={props.key}
        className='h-fil bg-white rounded-lg mb-3 text-start'
        onClick={() =>{
            if (props.active == props.id) {
                props.toggle(null);
            }else{
                props.toggle(props.id);
            }
        }}
    >
        <div
        className={`${props.active == props.id ? 'bg-white text-blue' : 'bg-green text-white'}
        py-2 px-4 flex justify-between rounded-lg items-center font-poppins`}>
            <p className={`${props.active == props.id ? 'font-semibold' : 'font normal'}`}>
                {props.quest}
            </p>
            <img src='/assets/icons/icPlus.svg'></img>
        </div>
        <div
				className={`${
					props.active == props.id ? "p-4 pt-0 h-fit" : "h-0 overflow-hidden"
				} text-blue`}
			>
				<h6 className={`font-normal `}>{props.answer}</h6>
			</div>
    </button>
  )
}
