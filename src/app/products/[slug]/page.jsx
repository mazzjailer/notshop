import React from 'react'
import Image from 'next/image'
import AddToCartButton from '../../../components/addToCartButton'
import { PrismaClient } from '@prisma/client'
import AddToFavouritesButton from '@/components/addToFavouritesButton'
import ProductPageCarousel from '@/app/products/[slug]/productPageCarousel'

const IndProductsPage = async ( { params } ) => {
  const { slug } = await params;
  const prisma = new PrismaClient();
  const product = await prisma.product.findUnique({
    where: {
      slug: slug,
    }
  });

  return (
    <div className='py-[5.4rem] md:py-24 px-4 md:px-32 pb-0 md:pb-0'>
      <div className='flex flex-col md:flex-row pb-6 items-center'>
        <Image src={product.images[0]} width={500} height={500} sizes="(max-width: 768px) 50vw, 50vw" className='aspect-square object-cover rounded-3xl mb-4' alt={product.name}/>
        <div className='flex flex-col md:pl-12 w-full'>
          <h1 className='text-3xl md:text-6xl font-bold pb-1 md:pb-3'>{product.name}</h1>
          <h2 className='text-3xl md:text-6xl pb-4 md:pb-6'>${product.price.toString()}</h2>
          <div className='flex flex-row'>
            <div className='p-1'>
              <AddToFavouritesButton product={product} />
            </div>
            <div className='p-1 w-full'>
              <AddToCartButton product={product} />
            </div>
          </div>
          <div className='flex flex-row pb-3 pt-4 md:pt-6'>
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
        <ProductPageCarousel />
      </div>
    </div>
  )
}

export default IndProductsPage