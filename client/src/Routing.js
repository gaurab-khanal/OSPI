import React from 'react'
import Home from './core/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './user/Signup';
import Signin from './user/Signin';
import Add from './user/Add';
import PrivateRoute from './auth/helper/PrivateRoutes';
import { isAuthenticated } from './auth/helper/index';
import List from './user/List';
import { list } from "./user/helper/userapicalls";







export const Routing = () => {   
  const token = isAuthenticated().token;
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/list"  loader={() => list()} element={<List/>}/>
      <Route element={<PrivateRoute token= {token} />}>
        <Route path='/add' element={<Add/>}/>
      </Route>
      </Routes>
    </Router>
  )
}
