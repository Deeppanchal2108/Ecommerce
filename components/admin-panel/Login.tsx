import React from 'react'
import { signIn } from 'next-auth/react'
function Login() {
  return (
    <div>
      <button onClick={()=>signIn()}>Github </button>
    </div>
  )
}

export default Login
