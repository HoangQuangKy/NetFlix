import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home/Home'

function PageContainer() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/' element={<Home></Home>}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default PageContainer
