'use client'
import React from 'react'
import { useFav } from '@/contexts/favContext'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import AddToFavouritesButton from '@/components/addToFavouritesButton'
import { useRouter } from 'next/navigation'
import { useProducts } from '@/contexts/productsContext'

const FavouritesPage = () => {
  const { favItems } = useFav();
  const { products } = useProducts();
  const router = useRouter();

  const favProducts = products.filter(product => 
    favItems.some(favItem => favItem === product.id)
  );

  return (
    <div className='flex flex-col'>
      <div className='grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 grid items-center justify-center gap-4'>
        { favProducts.map((item) => (
          <Card key={item.id} className='rounded-3xl cursor-pointer' onClick={() => router.push(`/products/${item.slug}`)}>
            <div key={item.id} className='flex flex-row p-4 w-full'>
              <Image src={item.images[0]} width={130} height={130} className='aspect-square object-cover rounded-2xl' alt={item.name}/>
              <CardContent className='flex flex-col pl-4 justify-center'>
                <CardTitle className='text-lg lg:text-xl xl:text-2xl text-wrap'>{item.name}</CardTitle>
                <CardDescription className='text-sm lg:text-md xl:text-lg pb-1'>${item.price}</CardDescription>
                <AddToFavouritesButton product={item} onClick={(e) => e.stopPropagation()} />
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default FavouritesPage