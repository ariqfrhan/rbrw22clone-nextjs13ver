import React from 'react'

export default function GroupFaq(props) {
  return (
    <button 
    className={`${props.active == props.id ? 'border-b-2 border-solid border-yellow' : ''}
    w-fit mx-4 py-2`} key={props.key}>
        <a
            onClick={() =>{
                props.changeGroup(props.id);
            }}
            className='font-poppins text-blue'
        >
            <p>{props.name}</p>
        </a>
    </button>
  )
}
