

import useAuth from '@/hooks/useAuth.tsx'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute(){
    const user = useAuth();
  
    if (user === null) {
      // Render a loading state while Firebase initializes
      return <div>Loading...</div>
    }
  
    return user ? <Outlet /> : <Navigate to="/sign-in" replace />
}
