'use client'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const FavouritesPageIcon = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/favourites');
  }

  return (
    <div onClick={handleClick} className='cursor-pointer'>
      <FaHeart className='text-2xl' />
    </div>
  )
}

export default FavouritesPageIcon