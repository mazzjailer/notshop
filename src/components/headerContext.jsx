'use client'
import React from 'react'
import { useState, useEffect } from 'react';

const HeaderContext = ({ children }) => {
  const [small, setSmall] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.scrollY > 50)
      );
    }
  }, []);

  return (
    <div className={`flex flex-row container max-w-full items-center justify-center align-middle fixed z-20 transition-all duration-500 ${small ? 'mt-8' : ''}`}>
      <div className={`flex flex-row p-4 h-[4.5rem] items-center align-middle z-10 transition-all duration-500 ${small ? 'bg-[#5A3D25] font-bold rounded-3xl w-11/12 md:w-10/12 text-[#fff6e8] text-2xl md:text-3xl shadow-md' : 'w-full bg-transparent shadow-none border-b border-black text-black text-3xl md:text-4xl font-bold'}`}>
        {children}
      </div>
    </div>
  )
}

export default HeaderContext