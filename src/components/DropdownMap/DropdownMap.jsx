'use client'
import React,{useState} from 'react'


export default function DropdownMap(props) {
    const {active, setActive, data, select} = props;
    const [input, setInput] = useState(null);

  return (
    <div
        className={`${active ? 'block' : 'hidden'}
        relative overflow-clip rounded-lg bg-yellow w-full mt-2`}
    >
        <div className='bg-orange p-3'>
            <div className='w-full flex px-4 bg-white rounded-md items-center'>
                <img src='/assets/icons/fe_search.svg' width={20}></img>
                <input
                    className='w-full font-poppins text-blue text-desc outline-0 py-2 ml-2'
                    placeholder='Cari Lokasi'
                    onChange={e =>{
                        setInput(e.target.value);
                    }}
                ></input>
            </div>
        </div>
        <div
				className={`h-[150px] overflow-auto py-3 px-3 overflow-y-scroll`}
			>
				{data
					.filter(e => {
						if (input != null) {
							return e.nama.toLowerCase().match(input.toLowerCase());
						} else {
							return e;
						}
					})
					.map(e => {
						return (
							<button
								onClick={() => {
									select(e.id);
									setActive(false);
								}}
								key={e.id}
								className='bg-yellow py-2 block text-start text-white text-[12px] font-poppins font-medium px-2'
							>
								{e.id}. {e.nama}
							</button>
						);
					})}
			</div>

    </div>
  )
}
