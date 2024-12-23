import Login from '@/components/admin-panel/Login';
import { useSession } from 'next-auth/react'
import React from 'react'
export interface Product{
  _id:string,
  imgSrc: string,
  fileKey: string ,
  name: string,
  price: string,
  category: string
}
function page() {
  return (
    <div>
      Dashboard page
    </div>
  )
}

export default page
