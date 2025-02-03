import React from 'react'
import Image from 'next/image'
import AddToCartButton from '../../../components/addToCartButton'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PrismaClient } from '@prisma/client'

const IndProductsPage = async ( {params} ) => {
  const {slug} = await params;
  const prisma = new PrismaClient();
  const product = await prisma.product.findUnique({
    where: {
      slug: slug,
    }
  });

  return (
    <div className='py-6 md:py-9 px-4 md:px-12'>
      <div className='flex flex-col md:flex-row pt-20 pb-6 md:pt-23 md:pb-8 items-center'>
        <Image src={product.images[0]} width={500} height={500} sizes="(max-width: 768px) 50vw, 50vw" className='aspect-square object-cover rounded-3xl mb-4' />
        <div className='flex flex-col md:pl-12 w-full'>
          <h1 className='text-3xl md:text-6xl font-bold pb-1 md:pb-3'>{product.name}</h1>
          <h2 className='text-3xl md:text-6xl pb-4 md:pb-6'>${product.price.toString()}</h2>
          <AddToCartButton />
          <div className='flex flex-row pb-3 pt-6 md:pt-8'>
            <h3 className='text-xl md:text-3xl border-b-2 border-black'>Description</h3>
          </div>
          <div className='flex flex-row'>
            <p className='text-md md:text-lg'>{product.description}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row pb-3'>
        <h3 className='text-xl md:text-3xl border-b-2 border-black'>Other products</h3>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[19rem] lg:max-w-6xl md:max-w-xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/5">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default IndProductsPage