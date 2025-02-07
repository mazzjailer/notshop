'use client'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'

const ProductsFilter = () => {
  const searchParams = useSearchParams();
  const [categoryDefaultValue, setCategoryDefaultValue] = useState(searchParams.get('category'));
  const [sortDefaultValue, setSortDefaultValue] = useState(searchParams.get('sort'));
  const router = useRouter();

  const handleSortChange = (value) => {
    if (searchParams.get('category')) {
    router.push(`?category=${searchParams.get('category')}&sort=${value}`);
    }
    else {
      router.push(`?sort=${value}`);
    }
  }

  const handleCategoryChange = (value) => {
    if (searchParams.get('sort')) {
    router.push(`?category=${value}&sort=${searchParams.get('sort')}`);
    }
    else {
      router.push(`?category=${value}`);
    }
  }
  
  const handleReset = () => {
    window.location.href = '/products';
  }

  return (
      <div className='flex flex-row pt-2'>
        <Select onValueChange={handleSortChange} defaultValue={sortDefaultValue || undefined}>
          <SelectTrigger className="w-fit bg-white rounded-xl m-1 ml-0">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lowest">Lowest price</SelectItem>
            <SelectItem value="highest">Highest price</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={handleCategoryChange} defaultValue={categoryDefaultValue || undefined}>
          <SelectTrigger className="w-fit bg-white rounded-xl m-1">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="clutches">Clutches</SelectItem>
            <SelectItem value="totebags">Tote bags</SelectItem>
            <SelectItem value="crossbodybags">Crossbody bags</SelectItem>
            <SelectItem value="shoulderbags">Shoulder bags</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-white rounded-xl m-1 hover:bg-white text-black font-light border border-input" onClick={handleReset}>Clear</Button>
    </div>
  )
}

export default ProductsFilter