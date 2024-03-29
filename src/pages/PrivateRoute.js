import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

// import { useUserContext } from '../context/user_context'

const PrivateRoute = ({ children }) => {
  // getting the user from useAuth0
  const { user } = useAuth0()
  if (!user) {
    return <Navigate to='/' />
  }
  return children
}
export default PrivateRoute
