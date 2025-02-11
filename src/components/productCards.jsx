'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AddToFavouritesButton from './addToFavouritesButton'
import { useSearchParams } from 'next/navigation'
import { sort } from 'fast-sort'

const ProductCards = (props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  let products = props.products;
  
  if (searchParams.get('sort') === 'lowest') {
    products = sort(products).asc(product => product.price)
    if (searchParams.get('category')) {
      products = products.filter((item) => item.category === searchParams.get('category'))
    }
  }
  else if (searchParams.get('sort') === 'highest') {
    products = sort(products).desc(product => product.price)
    if (searchParams.get('category')) {
      products = products.filter((item) => item.category === searchParams.get('category'))
    }
  }
  else if (searchParams.get('sort') === 'newest') {
    products = sort(products).desc(product => product.createdAt)
    if (searchParams.get('category')) {
      products = products.filter((item) => item.category === searchParams.get('category'))
    }
  }
  else if (searchParams.get('category')) {
    products = products.filter((item) => item.category === searchParams.get('category'))
  }

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className='flex flex-col items-center justify-center w-full h-full' onClick={() => router.push(`/products/${product.slug}`)}>
          <Card className='w-full h-full rounded-3xl relative cursor-pointer'>
            <CardHeader className='relative'>
              <Image src={product.images[0]} width={1000} height={1000} alt={product.name} className='w-full h-full object-cover rounded-md aspect-square' />
              <div className='absolute top-6 right-7' onClick={(e) => e.stopPropagation()}>
                <AddToFavouritesButton product={product} />
              </div>
            </CardHeader>
            <CardContent className='grid grid-cols-1 text-center'>
              <div className='flex flex-col col-span-2'>
                <CardTitle className="line-clamp-1 text-xl md:text-2xl">{product.name}</CardTitle>
                <CardDescription className='line-clamp-1 text-md md:text-lg'>${product.price.toString()}</CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  )
}

export default ProductCards