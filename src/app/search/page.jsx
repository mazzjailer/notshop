import React from 'react'
import { Input } from '@/components/ui/input'
import { FaSearch } from 'react-icons/fa'

const searchPage = () => {
  return (
    <div className='flex flex-row w-full h-full items-center justify-center'>
      <form className='flex w-10/12 md:w-8/12 mt-32 items-center'>
        <Input placeholder='Search' className='bg-white rounded-2xl h-12 shadow-sm border-none' />
        <button type='submit' className='bg-[#5A3D25] text-white rounded-2xl h-12 px-6 ml-3 shadow-sm'><FaSearch className='text-xl' /></button>
      </form>
    </div>
  )
}

export default searchPage