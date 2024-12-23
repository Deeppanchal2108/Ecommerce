"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import Login from '@/components/admin-panel/Login';
import { useAppSelector } from '@/redux/hooks';
function layout({children}:{children:React.ReactNode}) {
  const isLoading=useAppSelector((store)=>store.LoadingReducer)
  const { data: session } = useSession();
    if (!session?.user) {
      return <Login/>
    }
  return (
    <div className='flex'>
      {/* <Sidebar /> */}
      <div className='w-full h-full'>
        {/* <Navbar /> */}
        <div className='bg-gray-200 p-4 h[calc(100vh-64px)]'>{children }</div>
      </div>
      
    </div>
 
  )
}

export default layout
