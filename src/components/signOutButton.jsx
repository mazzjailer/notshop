'use client'
import React from 'react'
import { Button } from './ui/button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { MdLogout } from 'react-icons/md'

const SignOutButton = ({styles}) => {
  const router = useRouter();

  return (
    <form action={async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            router.refresh();
          },
        },
      });
    }}>
      <Button className={styles}>
        <div className='flex flex-row items-center justify-center'><MdLogout className='text-[#5A3D25] mr-1' />Sign out</div>
      </Button>
    </form>
  )
}

export default SignOutButton