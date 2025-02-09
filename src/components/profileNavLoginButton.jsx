import React from 'react'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Link from 'next/link'
import { Button } from './ui/button'
import SignOutButton from './signOutButton'

const ProfileNavLoginButton = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
    
  return (
    <div>
      {
        !session ? (
          <Link href='/sign-in'>
            <Button className='bg-white hover:bg-white text-black hover:underline shadow-none justify-start p-4 text-base md:text-lg font-medium pl-0'>Sign In</Button>
          </Link>
        ) : (
          <SignOutButton styles='bg-white hover:bg-white text-black hover:underline shadow-none justify-start p-4 text-base md:text-lg font-medium pl-0'/>
        )
      }
    </div>
  )
}

export default ProfileNavLoginButton