'use client'
import {React, useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import SearchShow from './searchShow'

const SearchPageIcon = () => {
  const router = useRouter();
  const [isSearch, setIsSearch] = useState(false);
  const handleClick = () => {
    setIsSearch(true);
  }

  return (
    <div onBlur={() => setIsSearch(false)}>
      <div className='flex flex-row cursor-pointer' onClick={handleClick}>
        <FaSearch className='text-2xl' />
      </div>
      { isSearch ? <SearchShow/> : '' }
    </div>
  )
}

export default SearchPageIcon