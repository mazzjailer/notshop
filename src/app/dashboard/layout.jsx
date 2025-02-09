import DashboardItems from "./dashboardItems.jsx"
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { redirect } from "next/navigation"

export default async function DashboardLayout({ children }) {
  const session = await auth.api.getSession({
      headers: await headers(),
    })
  !session ? redirect('/sign-in') : null;

  return (
        <div className='flex flex-col py-[5.4rem] md:py-28 px-4 md:px-20 pb-0 md:pb-0'>
          <div className='grid grid-cols-1 md:grid-cols-7 gap-4'>
            <div className='col-span-1 md:col-span-3 lg:col-span-2'>
              <DashboardItems />
            </div>
            <div className='col-span-1 md:col-span-4 lg:col-span-5'>
              <main>{children}</main>
            </div>
          </div>
        </div>
  )
}