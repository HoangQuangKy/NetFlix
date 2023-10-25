import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';

function AppRouter() {
    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
    )
}

export default AppRouter
