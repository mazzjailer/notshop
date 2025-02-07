'use client'
import React, { useContext, createContext, useEffect, useState } from 'react'

const ProductsContext = createContext();

const ProductsProvider = ({children, initialProducts}) => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
}