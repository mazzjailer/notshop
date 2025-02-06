'use client'
import React from 'react'
import { useContext, createContext, useState, useEffect } from 'react'

const FavContext = createContext();

const FavProvider = ({children}) => {
  const [favItems, setFavItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedFav = localStorage.getItem('fav');
    if (savedFav) {
      setFavItems(JSON.parse(savedFav));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('fav', JSON.stringify(favItems));
    }
  }, [favItems, isLoaded]);

  const addToFav = (product) => {
    const existingFavItemIndex = favItems.findIndex((item) => item.id === product.id);

    if (existingFavItemIndex !== -1) {
      const existingFavItem = favItems[existingFavItemIndex];
      const updatedFavItem = {
        ...existingFavItem,
      };
      const updatedFavItems = [...favItems];
      updatedFavItems[existingFavItemIndex] = updatedFavItem;
      setFavItems(updatedFavItems);
    }
    else {
      setFavItems([...favItems, { ...product }]);
    }
  }

  const removeItem = (product) => {
    const updatedFavItems = favItems.filter((item) => item.id !== product.id);
    setFavItems(updatedFavItems);
  }

  const clearFav = () => {
    setFavItems([]);
  }

  return (
    <FavContext.Provider value={{ favItems, addToFav, removeItem, clearFav }}>
      {children}
    </FavContext.Provider>
  )
}

export default FavProvider

export const useFav = () => {
  const context = useContext(FavContext);
  if (context === undefined) {
    throw new Error('useFav must be used within a FavProvider');
  }
  return useContext(FavContext);
}