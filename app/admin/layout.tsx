import React from 'react'
import { useSession } from 'next-auth/react'
import Login from '@/components/admin-panel/Login';
function layout() {
  const { data: session } = useSession();
    if (!session?.user) {
      return <Login/>
    }
  return (
    <div>
      layout
    </div>
 
  )
}

export default layout
