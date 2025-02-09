'use client'
import React from 'react'
import { FaBagShopping } from "react-icons/fa6"
import { Button } from "./ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer"
import { ScrollArea } from './ui/scroll-area'
import Image from 'next/image'
import { useCart } from '@/contexts/cartContext'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'

const ShoppingBag = () => {
  const {addToCart, updateCartItemQuantity, removeItem, cartTotal, cartItems} = useCart();

    const handleAddToCart = (product) => {
      addToCart(product);
    }
    const handleUpdateCartItemQuantity = (product, quantity) => {
      if (quantity === 1) {
        removeItem(product);
      }
      else {
        updateCartItemQuantity(product, quantity - 1);
      }
    }

  return (
    <Drawer>
      <DrawerTrigger><FaBagShopping className='text-2xl mr-3 md:mr-6' /></DrawerTrigger>
      <DrawerContent className='bg-[#EDE0D4]'>
        <DrawerHeader>
          <DrawerTitle className='text-2xl'>Cart</DrawerTitle>
          <ScrollArea className="max-h-[60vh] overflow-auto">
            { cartItems.map((item) => (
              <Card key={item.id} className='flex flex-row py-4 bg-transparent shadow-none border-none'>
              <Image src={item.images[0]} width={130} height={130} className='aspect-square object-cover rounded-2xl'/>
              <CardContent className='flex flex-col pl-4 items-start justify-center'>
                <CardTitle className='text-2xl md:text-3xl'>{item.name}</CardTitle>
                <CardDescription className='text-lg md:text-xl'>${item.price}</CardDescription>
                <div className='flex flex-row items-center justify-start'><Button onClick={() => handleAddToCart(item)} className='font-bold rounded-xl m-1 ml-0'>+</Button><Button className='font-bold rounded-xl bg-white text-black cursor-default hover:bg-white m-1'>{item.quantity}</Button><Button onClick={() => handleUpdateCartItemQuantity(item, item.quantity)} className='font-bold rounded-xl m-1'>-</Button></div>
              </CardContent>
            </Card>
            ))}
          </ScrollArea>
        </DrawerHeader>
        <DrawerFooter>
          <p className='text-lg'>Total: ${cartTotal}</p>
          <Button className='font-bold'>Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default ShoppingBag