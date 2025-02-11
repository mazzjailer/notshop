'use client'
import React from 'react'
import { useContext, createContext, useState, useEffect } from 'react'
import { useSession } from './sessionContext';

const FavContext = createContext();

const FavProvider = ({children}) => {
  const { session } = useSession();
  const [favItems, setFavItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const localFavs = localStorage.getItem('fav');
        const parsedLocalFavs = localFavs ? JSON.parse(localFavs) : [];
  
        if (!session?.user?.id) {
          setFavItems(parsedLocalFavs);
          setIsLoaded(true);
          return;
        }
  
        if (parsedLocalFavs.length > 0) {
          await fetch('/api/favourites', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              userId: session.user.id, 
              faves: parsedLocalFavs,
              isLocalFav: true
            })
          });
          localStorage.removeItem('fav');
        }
  
        const response = await fetch(`/api/favourites?userId=${session.user.id}`);
        const data = await response.json();
        if (data.data) {
          setFavItems(data.data);
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
      setIsLoaded(true);
    };
    fetchFavorites();
    
  }, [session?.user?.id]);

  useEffect(() => {
    const updateFavorites = async () => {
      if (!isLoaded) {
        return;
      }
      if (!session?.user?.id) {
        localStorage.setItem('fav', JSON.stringify(favItems));
      }

      try {
        await fetch('/api/favourites', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            userId: session.user.id, 
            faves: favItems,
            isLocalFav: false
          })
        });
      } catch (error) {
        console.error('Error updating favorites:', error);
      }
    };
    updateFavorites();

  }, [favItems, isLoaded, session?.user?.id]);

  const addToFav = (product) => {
    const existingIndex = favItems.findIndex(item => item === product);
    if (existingIndex === -1) {
      setFavItems([...favItems, product]);
    }
  };

  const removeItem = (product) => {
    setFavItems(favItems.filter(item => item !== product));
  };

  const clearFav = () => {
    setFavItems([]);
  };

  return (
    <FavContext.Provider value={{ 
      favItems, 
      addToFav, 
      removeItem, 
      clearFav,
      isLoaded 
    }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider;

export const useFav = () => {
  const context = useContext(FavContext);
  if (!context) {
    throw new Error('useFav must be used within a FavProvider');
  }
  return context;
};