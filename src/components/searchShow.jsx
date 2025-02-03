import {React, useState} from 'react'
import { Input } from '../components/ui/input'
import { FaSearch } from 'react-icons/fa'
import { Card } from './ui/card'

const SearchShow = () => {
  const [isSearching, setIsSearching] = useState(false)
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50'>
      <div className='w-full max-w-3xl px-4'>
        <form className='flex w-full gap-3'>
          <Input 
            placeholder='Search' 
            className='bg-white rounded-2xl h-12 shadow-sm border-none flex-1 text-black' 
            onChange={(e) => setIsSearching(true)}
          />
          <button 
            type='submit' 
            className='bg-[#5A3D25] text-white rounded-2xl h-12 px-6 shadow-sm hover:bg-[#4A3220] transition-colors'
          >
            <FaSearch className='text-xl' />
          </button>
        </form>
        { isSearching ? <Card className='mt-4'>hi</Card> : ''}
      </div>
    </div>
  )
}

export default SearchShow