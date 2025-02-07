import React from 'react'
import { PrismaClient } from '@prisma/client'
import ProductsContext from './productsContext'

const ProductsData = async ({children}) => {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany();

  return (
    <ProductsContext initialProducts={products}>
      {children}
    </ProductsContext>
  )
}

export default ProductsData