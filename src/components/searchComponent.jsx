'use client'
import {React, useState, useRef, useEffect} from 'react'
import { Input } from './ui/input'
import { FaSearch } from 'react-icons/fa'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { useProducts } from '@/contexts/productsContext'
import AddToFavouritesButton from './addToFavouritesButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchComponent = () => {
  const { products } = useProducts();
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setQuery('');
        setSearchResults([]);
        setIsSearching(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    
    if (searchQuery.length > 0) {
      setIsSearching(true);
      const filtered = products.filter((product) => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  const handleSearchIconClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className='cursor-pointer' onClick={handleSearchIconClick}>
        <FaSearch className='text-2xl' />
      </div>
      
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50'>
          <div ref={searchRef} className='w-full max-w-3xl px-4'>
            <form className='flex w-full gap-3' onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder='Search' 
                className='bg-white rounded-2xl h-12 shadow-sm border-none flex-1 text-black' 
                onChange={handleSearch}
                value={query}
                autoFocus
              />
            </form>
            { isSearching && <Card className='mt-4 max-h-[300px] overflow-y-auto rounded-3xl bg-[#fff6e8] border-none'>
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <Card key={item.id} className='rounded-3xl cursor-pointer m-5 bg-white' onClick={() => router.push(`/products/${item.slug}`)}>
                      <div key={item.id} className='flex flex-row p-4 w-full'>
                      <Image src={item.images[0]} width={130} height={130} className='aspect-square object-cover rounded-2xl'/>
                      <CardContent className='flex flex-col pl-4 justify-center'>
                        <CardTitle className='text-xl lg:text-2xl xl:text-3xl text-wrap'>{item.name}</CardTitle>
                        <CardDescription className='text-md lg:text-lg xl:text-xl pb-1'>${item.price}</CardDescription>
                        <AddToFavouritesButton product={item} onClick={(e) => e.stopPropagation()} />
                      </CardContent>
                    </div>
                  </Card>
                ))
              ) : ( <p className='text-2xl m-5'>No results found</p> )}
            </Card>
          }
          </div>
        </div>
      )}
    </>
  );
};

export default SearchComponent;