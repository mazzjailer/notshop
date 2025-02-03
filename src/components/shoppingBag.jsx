import React from 'react'
import { FaBagShopping } from "react-icons/fa6"
import { Button } from "../components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer"
import { ScrollArea } from './ui/scroll-area'
import Image from 'next/image'

const ShoppingBag = () => {

  return (
    <Drawer>
      <DrawerTrigger><FaBagShopping className='text-2xl mr-3 md:mr-6' /></DrawerTrigger>
      <DrawerContent className='bg-[#EDE0D4]'>
        <DrawerHeader>
          <DrawerTitle className='text-2xl'>Cart</DrawerTitle>
          <ScrollArea className="max-h-[60vh] overflow-auto">
            <div className='flex flex-row py-4'>
              <Image src='/images/6.jpg' width={130} height={130} className='aspect-square object-cover rounded-2xl'/>
              <div className='flex flex-col pl-4 justify-center'>
                <h5 className='text-3xl'>Astro</h5>
                <h5 className='text-2xl'>5000$</h5>
              </div>
            </div>
            <div className='flex flex-row py-4'>
              <Image src='/images/5.jpg' width={130} height={130} className='aspect-square object-cover rounded-2xl'/>
              <div className='flex flex-col pl-4 justify-center'>
                <h5 className='text-3xl'>Astro</h5>
                <h5 className='text-2xl'>5000$</h5>
              </div>
            </div>
            <div className='flex flex-row py-4'>
              <Image src='/images/6.jpg' width={130} height={130} className='aspect-square object-cover rounded-2xl'/>
              <div className='flex flex-col pl-4 justify-center'>
                <h5 className='text-3xl'>Astro</h5>
                <h5 className='text-2xl'>5000$</h5>
              </div>
            </div>
            <div className='flex flex-row py-4'>
              <Image src='/images/6.jpg' width={130} height={130} className='aspect-square object-cover rounded-2xl'/>
              <div className='flex flex-col pl-4 justify-center'>
                <h5 className='text-3xl'>Astro</h5>
                <h5 className='text-2xl'>5000$</h5>
              </div>
            </div>
            <div className='flex flex-row py-4'>
              <Image src='/images/6.jpg' width={130} height={130} className='aspect-square object-cover rounded-2xl'/>
              <div className='flex flex-col pl-4 justify-center'>
                <h5 className='text-3xl'>Astro</h5>
                <h5 className='text-2xl'>5000$</h5>
              </div>
            </div>
            <div className='flex flex-row py-4'>
              <Image src='/images/6.jpg' width={130} height={130} className='aspect-square object-cover rounded-2xl'/>
              <div className='flex flex-col pl-4 justify-center'>
                <h5 className='text-3xl'>Astro</h5>
                <h5 className='text-2xl'>5000$</h5>
              </div>
            </div>
          </ScrollArea>
        </DrawerHeader>
        <DrawerFooter>
          <p className='text-lg'>Total: $10000</p>
          <Button className='font-bold'>Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default ShoppingBag