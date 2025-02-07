import React from 'react'
import HomeCrousel from './homeCrousel'
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client'
import ProductCards from '../components/productCards'
import { sort } from 'fast-sort'


const Home = async () => {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany();

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-row items-center justify-center w-full h-full'>
        <HomeCrousel />
      </div>
      <div className='w-full px-4 py-6 md:px-32 md:py-9'>
        <div className='flex w-full h-full pb-5 md:pb-9'>
            <h1 className='text-4xl md:text-5xl font-bold'>Latest</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 w-full'>
          <ProductCards products={sort(products).desc(product => product.createdAt).slice(0, 7)} />
          <div className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1'>
            <Link href='/products'>
              <Button className='text-wrap text-md lg:text-xl font-bold text-white p-6 hover:bg-opacity-90 rounded-full border-[#5A3D25] border'>Explore more...</Button>
            </Link>  
          </div>
        </div>
      </div>
      <div className='w-full px-4 py-6 md:px-32 md:py-9 pb-0 md:pb-0'>
        <div className='bg-black w-full text-white px-12 py-9 md:px-32 md:py-24 rounded-[1.9rem] md:rounded-[7rem]'>
          <div className='flex w-full h-full pb-7 md:pb-9'>
            <h1 className='text-3xl md:text-5xl font-bold'>Shop by categories</h1>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 w-full'>
            <Link href='/products?category=clutches' className='flex flex-col items-center justify-center w-full h-full'>
              <Card className='w-full h-full rounded-3xl relative border-none'>
                <CardHeader className='relative w-full h-full p-0'>
                  <Image 
                    src="/images/4.jpg" 
                    width={1000} 
                    height={1000} 
                    alt="hero" 
                    className='w-full h-full object-cover rounded-3xl' 
                  />
                  <div className='absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-[85%] bg-white px-3 lg:px-4 py-3 rounded-xl'>
                    <CardTitle className="text-center text-md lg:text-2xl">
                      Clutches
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>
            </Link>
            <Link href='/products?category=shoulderbags' className='flex flex-col items-center justify-center w-full h-full'>
              <Card className='w-full h-full rounded-3xl relative border-none'>
                <CardHeader className='relative w-full h-full p-0'>
                  <Image 
                    src="/images/7.jpg" 
                    width={1000} 
                    height={1000} 
                    alt="hero" 
                    className='w-full h-full object-cover rounded-3xl' 
                  />
                  <div className='absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-[85%] bg-white px-3 lg:px-4 py-3 rounded-xl'>
                    <CardTitle className="text-center text-md lg:text-2xl">
                      Shoulder Bags
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>
            </Link>
            <Link href='/products?category=crossbodybags' className='flex flex-col items-center justify-center w-full h-full'>
              <Card className='w-full h-full rounded-3xl relative border-none'>
                <CardHeader className='relative w-full h-full p-0'>
                  <Image 
                    src="/images/8.jpg" 
                    width={1000} 
                    height={1000} 
                    alt="hero" 
                    className='w-full h-full object-cover rounded-3xl' 
                  />
                  <div className='absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-[85%] bg-white px-3 lg:px-4 py-3 rounded-xl'>
                    <CardTitle className="text-center text-md lg:text-2xl">
                      Crossbody Bags
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>
            </Link>
            <Link href='/products?category=totebags' className='flex flex-col items-center justify-center w-full h-full'>
              <Card className='w-full h-full rounded-3xl relative border-none'>
                <CardHeader className='relative w-full h-full p-0'>
                  <Image 
                    src="/images/5.jpg" 
                    width={1000} 
                    height={1000} 
                    alt="hero" 
                    className='w-full h-full object-cover rounded-3xl' 
                  />
                  <div className='absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-[85%] bg-white px-3 lg:px-4 py-3 rounded-xl'>
                    <CardTitle className="text-center text-md lg:text-2xl">
                      Tote Bags
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home