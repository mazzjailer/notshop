'use client'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter, useSearchParams } from 'next/navigation'

const ProductsFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSortChange = (value) => {
    if (searchParams.get('category')) {
    router.push(`?category=${searchParams.get('category')}&sort=${value}`);
    }
    else {
      router.push(`?sort=${value}`);
    }
  };
  const handleCategoryChange = (value) => {
    if (searchParams.get('sort')) {
    router.push(`?category=${value}&sort=${searchParams.get('sort')}`);
    }
    else {
      router.push(`?category=${value}`);
    }
  };

  return (
      <div className='flex flex-row pt-2'>
        <Select onValueChange={handleSortChange}>
          <SelectTrigger className="w-fit bg-white rounded-xl m-1">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lowest">Lowest price</SelectItem>
            <SelectItem value="highest">Highest price</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={handleCategoryChange}>
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
    </div>
  )
}

export default ProductsFilter