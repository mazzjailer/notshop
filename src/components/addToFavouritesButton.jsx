'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button } from "./ui/button";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useFav } from '@/contexts/favContext';

const AddToFavouritesButton = (props) => {
  const [isFav, setIsFav] = useState(false)
  const {addToFav, removeItem, favItems} = useFav();

  useEffect(() => {
    if (!props.product) return;
    const isProductFav = favItems.some(item => item === props.product.id);
    setIsFav(isProductFav);
  }, [favItems, props.product])

  const handleClick = (product) => {
    if (isFav) {
      removeItem(product);
    } else {
      addToFav(product);
    }
    setIsFav(!isFav);
  }
  
  return (
    <Button
      size='icon' 
      onClick={() => handleClick(props.product.id)} 
      className='transition-all duration-300 rounded-xl bg-white border-2 border-black hover:bg-gray-100'
    >
      {isFav ? <FaHeart className='text-[#5A3D25]' /> : <FaRegHeart className='text-[#5A3D25]' />}
    </Button>
  )
}

export default AddToFavouritesButton