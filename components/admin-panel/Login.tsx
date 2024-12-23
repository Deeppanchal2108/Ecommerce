import React from 'react'
import { signIn } from 'next-auth/react'
function Login() {
  return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
          <button
              onClick={() => signIn("github")}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
              Sign in with GitHub
          </button>
      </div>

  )
}

export default Login
