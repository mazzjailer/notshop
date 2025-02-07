'use client'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { FaChevronDown } from 'react-icons/fa6'

const ProductsNavMenu = () => {

  return (
    <div className='text-xl font-bold cursor-pointer'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className='text-2xl rounded-2xl'>
            <NavigationMenuTrigger className='text-sm md:text-lg font-bold'>
              <span className="hidden md:block pt-1">Categories</span>
            <FaChevronDown className='md:ml-1 md:pt-1 text-xl md:text-xs stroke-[30px]' />
            </NavigationMenuTrigger>
            <NavigationMenuContent className='flex flex-col p-4 text-base md:text-lg font-normal'>
              <NavigationMenuLink href='/products?category=clutches' className='w-[150px] py-1 hover:underline text-gray-600'>Clutches</NavigationMenuLink>
              <NavigationMenuLink href='/products?category=shoulderbags' className='w-[150px] py-1 hover:underline text-gray-600'>Shoulder Bags</NavigationMenuLink>
              <NavigationMenuLink href='/products?category=crossbodybags' className='w-[150px] py-1 hover:underline text-gray-600'>Crossbody Bags</NavigationMenuLink>
              <NavigationMenuLink href='/products?category=totebags' className='w-[150px] py-1 hover:underline text-gray-600'>Tote Bags</NavigationMenuLink>
              <NavigationMenuLink href='/products' className='w-[150px] py-1 hover:underline border-t font-medium'>All Categories</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default ProductsNavMenu