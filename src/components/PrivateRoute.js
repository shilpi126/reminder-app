import React, { useContext } from 'react'
import { AuthContext } from '../context/auth';

import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoute({children}) {

    const { user } = useContext(AuthContext);
    
  return (
       <>
       {user?<Outlet/> : <Navigate to="/login"/>}
       </>
  )
}

export default PrivateRoute