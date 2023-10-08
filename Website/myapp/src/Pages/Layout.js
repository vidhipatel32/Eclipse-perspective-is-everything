import React from 'react'
import { BrowserRouter, Routes, Route ,NavLink} from "react-router-dom";
import First from './First';
import Second from "./Second"
import Login from './Login';
import Signup from './Signup'



const Layout = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<First />} />
                <Route path="/first" element={<First />} />
                <Route path="/second" element={<Second />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
        </BrowserRouter>
    </div>  
  )
}

export default Layout