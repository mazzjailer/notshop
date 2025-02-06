'use client'
import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from '@/components/ui/card'
import AddToFavouritesButton from '../../../components/addToFavouritesButton'
import { useRouter } from 'next/navigation'

const ProductPageCarousel = (props) => {
  const router = useRouter();
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[19rem] lg:max-w-6xl md:max-w-xl"
        >
          <CarouselContent className='p-1'>
            {shuffleArray(props.products).map((product) => (
              <CarouselItem key={product.id} className="basis-1/2 md:basis-1/2 lg:basis-1/5">
                <div key={product.id} className='flex flex-col items-center justify-center w-full h-full' onClick={() => router.push(`/products/${product.slug}`)}>
                  <Card className='w-full h-full rounded-3xl relative cursor-pointer'>
                    <CardHeader className='relative p-4 md:p-6'>
                      <Image src={product.images[0]} width={1000} height={1000} alt="hero" className='w-full h-full object-cover rounded-md aspect-square' />
                      <div className='absolute top-6 right-7' onClick={(e) => e.stopPropagation()}>
                        <AddToFavouritesButton product={product} />
                      </div>
                    </CardHeader>
                    <CardContent className='grid grid-cols-1 text-center p-4 pt-0'>
                      <div className='flex flex-col col-span-2'>
                        <CardTitle className="line-clamp-1 text-xl md:text-2xl">{product.name}</CardTitle>
                        <CardDescription className='line-clamp-1 text-md md:text-lg'>${product.price.toString()}</CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
    </Carousel>
  )
}

export default ProductPageCarousel