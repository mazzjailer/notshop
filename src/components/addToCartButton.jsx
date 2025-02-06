'use client'
import React from 'react'
import { Button } from './ui/button'
import { useCart } from "../contexts/cartContext.jsx"

const AddToCartButton = (props) => {
  const {addToCart, cartItems, updateCartItemQuantity, removeItem} = useCart();
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
    <div>
      { cartItems.find(item => item.id === props.product.id) ? <div className='flex flex-row items-center justify-start gap-1'>
        <Button onClick={() => handleUpdateCartItemQuantity(props.product, cartItems.find(item => item.id === props.product.id).quantity)} className='font-bold rounded-xl'>-</Button>
        <Button className='font-bold rounded-xl bg-white text-black cursor-default hover:bg-white shadow-none border border-gray-200'>
          {cartItems.find(item => item.id === props.product.id).quantity}
        </Button>
        <Button onClick={() => handleAddToCart(props.product)} className='font-bold rounded-xl'>+</Button>
      </div> : <Button onClick={() => handleAddToCart(props.product)} className='font-bold w-full rounded-xl'>ADD TO CART</Button>}
    </div>
  )
}

export default AddToCartButton