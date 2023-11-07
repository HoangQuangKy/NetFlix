import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home/Home';
import AdminPage from '../components/Admin/AdminPage';
import CreateFilm from '../components/Admin/CreateFilm';

function AppRouter() {
    return (

        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path='/admin' element={<AdminPage></AdminPage>} />
            <Route path='/admin/create_film' element={<CreateFilm></CreateFilm>}></Route>
        </Routes>

    )
}

export default AppRouter
