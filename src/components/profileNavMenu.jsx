import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import ProfileNavLoginButton from './profileNavLoginButton'
import { MdPerson } from "react-icons/md";

const ProfileNavMenu = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className='text-2xl rounded-2xl'>
            <NavigationMenuTrigger className='text-sm md:text-lg font-bold align-middle items-center justify-center'>
              <MdPerson className='text-3xl' />
            </NavigationMenuTrigger>
            <NavigationMenuContent className='flex flex-col p-4 text-base md:text-lg font-normal'>
              <NavigationMenuLink href='/dashboard/profile' className='w-[150px] py-1 hover:underline text-gray-600'>Profile</NavigationMenuLink>
              <NavigationMenuLink href='/dashboard/orders' className='w-[150px] py-1 hover:underline text-gray-600'>Orders</NavigationMenuLink>
              <NavigationMenuLink href='/dashboard/addresses' className='w-[150px] py-1 hover:underline text-gray-600'>Addresses</NavigationMenuLink>
              <NavigationMenuLink href='/dashboard/favourites' className='w-[150px] py-1 hover:underline text-gray-600'>Favourites</NavigationMenuLink>
              <NavigationMenuLink className='border-t'><ProfileNavLoginButton /></NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default ProfileNavMenu