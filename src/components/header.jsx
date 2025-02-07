'use client'
import React from 'react'
import ShoppingBag from './shoppingCart'
import FavouritesPageIcon from './favouritesPageIcon'
import SearchComponent from './searchComponent'
import ProductsNavMenu from './productsNavMenu'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.scrollY > 50)
      );
    }
  }, []);

  return (
    <div className={`flex flex-row container max-w-full items-center justify-center align-middle fixed z-20 transition-all duration-500 ${small ? 'mt-8' : ''}`}>
      <div className={`flex flex-row p-4 h-[4.5rem] items-center align-middle z-10 transition-all duration-500 ${small ? 'bg-[#5A3D25] font-bold rounded-3xl w-11/12 md:w-10/12 text-[#fff6e8] text-2xl md:text-3xl shadow-md' : 'w-full bg-transparent shadow-none border-b border-black text-black text-3xl md:text-4xl font-bold'}`}>
      <div className='flex flex-row justify-between w-full ml-3 md:ml-6 items-center'>
        <div className='flex flex-row items-center align-middle'>
          <Link href="/" className='align-middle -mr-1 md:mr-3'>notShop</Link>
          <ProductsNavMenu />
        </div>
        <div className='flex flex-row items-center w-5/12 md:w-4/12 lg:w-3/12 justify-between'>
          <SearchComponent />
          <FavouritesPageIcon />
          <ShoppingBag />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header