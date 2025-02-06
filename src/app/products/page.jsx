import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PrismaClient } from '@prisma/client'
import ProductCards from '../../components/productCards'
import { FilterIcon } from 'lucide-react'
import ProductsFilter from './productsFilter'

const productsPage = async () => {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany();

  return (
    <div className='py-[5.4rem] md:py-24 px-4 md:px-32 pb-0 md:pb-0'>
      <h1 className='text-4xl md:text-5xl font-bold'>Products</h1>
      <ProductsFilter />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 w-full col-span-3 md:col-span-3 lg:col-span-5 pt-2'>
        <ProductCards products={products} />
      </div>
    </div>
  )
}

export default productsPage