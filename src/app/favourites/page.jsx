'use client'
import React from 'react'
import { useFav } from '@/contexts/favContext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import AddToFavouritesButton from '@/components/addToFavouritesButton'
import { useRouter } from 'next/navigation'

const favouritesPage = () => {
  const { favItems } = useFav();
  const router = useRouter();

  return (
    <div className='flex flex-col py-[5.4rem] md:py-24 px-4 md:px-32 pb-0 md:pb-0'>
      <h1 className='text-3xl md:text-4xl font-bold pb-4 md:pb-5'>Favourites</h1>
      <div className='grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid items-center justify-center gap-4'>
      { favItems.map((item) => (
                  <Card key={item.id} className='rounded-3xl cursor-pointer' onClick={() => router.push(`/products/${item.slug}`)}>
                    <div key={item.id} className='flex flex-row p-4 w-full'>
                    <Image src={item.images[0]} width={130} height={130} className='aspect-square object-cover rounded-2xl'/>
                    <CardContent className='flex flex-col pl-4 justify-center'>
                      <CardTitle className='text-xl lg:text-2xl xl:text-3xl text-wrap'>{item.name}</CardTitle>
                      <CardDescription className='text-md lg:text-lg xl:text-xl pb-1'>${item.price}</CardDescription>
                      <AddToFavouritesButton product={item} onClick={(e) => e.stopPropagation()} />
                    </CardContent>
                  </div>
                </Card>
                  ))}
    </div>
    </div>
  )
}

export default favouritesPage