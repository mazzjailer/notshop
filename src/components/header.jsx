import React from 'react'
import ShoppingBag from './shoppingCart'
import SearchComponent from './searchComponent'
import ProductsNavMenu from './productsNavMenu'
import Link from 'next/link'
import HeaderContext from './headerContext'
import ProfileNavMenu from './profileNavMenu'

const Header = () => {

  return (
    <HeaderContext>
      <div className='flex flex-row justify-between w-full ml-3 md:ml-6 items-center'>
        <div className='flex flex-row items-center align-middle'>
          <Link href="/" className='align-middle -mr-1 md:mr-3'>notShop</Link>
          <ProductsNavMenu />
        </div>
        <div className='flex flex-row items-center w-5/12 md:w-4/12 lg:w-3/12 justify-between'>
          <SearchComponent />
          <ProfileNavMenu />
          <ShoppingBag />
        </div>
      </div>
    </HeaderContext>
  )
}

export default Header