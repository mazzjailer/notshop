import React from 'react'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa6'

const Footer = () => {
  return (
      <div className='flex flex-row justify-center items-center w-full h-20 md:h-32 text-[#5A3D25] font-bold text-md md:text-lg'>
      Made with&nbsp;<FaHeart className='text-red-500 mx-1' />&nbsp;by&nbsp;<Link className='hover:underline font-medium' href='https://github.com/mazzjailer'>Maziyar Amini</Link>
    </div>
  )
}

export default Footer