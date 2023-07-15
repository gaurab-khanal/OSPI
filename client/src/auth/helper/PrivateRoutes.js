import React from "react";
import { Navigate, Outlet} from 'react-router-dom';



const PrivateRoute = (props)=> {
  const {token} = props;
  return token ? <Outlet/> : <Navigate to="/signin"/>
  }


export default PrivateRoute;


