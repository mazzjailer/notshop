'use client'
import React from 'react'
import { useState } from 'react';
import { Button } from "../components/ui/button";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const AddToFavouritesButton = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <Button
      size='icon' 
      onClick={handleClick} 
      className='transition-all duration-300 rounded-xl bg-white border-2 border-black hover:bg-gray-100'
    >
      {isClicked ? <FaHeart className='text-[#5A3D25]' /> : <FaRegHeart className='text-[#5A3D25]' />}
    </Button>
  )
}

export default AddToFavouritesButton