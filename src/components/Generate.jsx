import React from 'react'
import { VscGear } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
const Generate = () => {
  const navigate = useNavigate();
  const handleClick  = () =>{
    navigate('/')
  }
  return (
    <div className="flex flex-col">
      <div className='flex flex-row justify-between mx-5 my-3 items-center' >
        <button className='btn text-blue-500 text-bold text-lg border-2 border-solid border-blue-500'>
          Generate
        </button>
        <h2 className='text-2xl font-bold'>Linked In cover letter generator</h2>
        <button className='border-2 mr-[1px] p-2 rounded-[100%] border-solid border-gray-200'>
          <VscGear width={100} height={100} color='white' onClick={handleClick} />
        </button>
      </div>
      <div className='flex mx-5'>
        <textarea className='w-full' id="" cols="30" rows="12"
        placeholder='generated cover letter' />
      </div>
    </div>
  )
}

export default Generate