import React from 'react'
import { FiLoader } from "react-icons/fi";

const Loading = () => {
  return (
    <div className='flex h-screen pb-56 items-center justify-center'>
      <div className='flex flex-row bg-[#5A3D25] shadow-inner p-5 rounded-2xl items-center justify-center z-50' >
        <FiLoader className='text-white text-xl animate-spin mr-2' /><h4 className='text-white text-xl font-medium'>Loading...</h4>
      </div>
    </div>
  )
}

export default Loading