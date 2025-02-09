'use client'
import React, { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import SignOutButton from '@/components/signOutButton'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useSession } from '@/contexts/sessionContext'

const DashboardItems = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(path)
  const { session } = useSession();

  useEffect(() => { 
    setIsOpen(path) 
  }, [path])

  return (
    <Card className='rounded-2xl'>
      <CardHeader className='border-b'>
        <CardTitle className='text-md font-medium'>Welcome back,</CardTitle>
        <CardTitle className='text-2xl'>{session.user.name}</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col pt-4 p-0 font-normal'>
        <Link href='/dashboard/profile' className={`text-lg hover:bg-gray-100 px-6 py-3 ${isOpen === '/dashboard/profile' ? 'bg-gray-100 font-bold' : ''}`}>Profile</Link>
        <Link href='/dashboard/orders' className={`text-lg hover:bg-gray-100 px-6 py-3 ${isOpen === '/dashboard/orders' ? 'bg-gray-100 font-bold' : ''}`}>Orders</Link>
        <Link href='/dashboard/addresses' className={`text-lg hover:bg-gray-100 px-6 py-3 ${isOpen === '/dashboard/addresses' ? 'bg-gray-100 font-bold' : ''}`}>Addresses</Link>
        <Link href='/dashboard/favourites' className={`text-lg hover:bg-gray-100 px-6 py-3 ${isOpen === '/dashboard/favourites' ? 'bg-gray-100 font-bold' : ''}`}>Favourites</Link>
        <SignOutButton styles='border-t text-lg hover:bg-gray-100 px-6 py-6 bg-white text-black justify-start shadow-none rounded-b-2xl rounded-t-none font-normal w-full' />
      </CardContent>
    </Card>
  )
}

export default DashboardItems