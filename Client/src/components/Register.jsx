import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo.jpg'
import { createNewUser } from '../services'

function Register() {


    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-[url('../../public/loginbg.jpg')]">
            <div className='w-full h-20 pl-12 pt-5'>
                <img src={logo} alt="" width={180} height={180} className=' bg-opacity-0' />

            </div>
            <div className='w-[450px] h-[668px] bg-black bg-opacity-80 py-12 px-[68px] flex flex-col '>
                <h1 className='text-white text-4xl pb-8 font-semibold'>Sign up</h1>
                <div className='items-center flex flex-col'>
                    <input type="text" placeholder='Email or phone number' className=' w-[314px] h-[50px] px-5 rounded-t-md border-b-4 border-yellow-600 mb-5 bg-gray-700' />
                    <input type="text" placeholder='Password' className=' w-[314px] h-[50px] px-5 rounded-t-md border-b-4 border-yellow-600 bg-gray-700 mb-5' />
                    <input type="text" placeholder='Full Name' className=' w-[314px] h-[50px] px-5 rounded-t-md border-b-4 border-yellow-600 bg-gray-700 mb-5' />
                    <input type="phone" placeholder='Phone Number' className=' w-[314px] h-[50px] px-5 rounded-t-md border-b-4 border-yellow-600 bg-gray-700 mb-5' />
                    <input type="date" placeholder='dateOfBirth' className=' w-[314px] h-[50px] px-5 rounded-t-md border-b-4 border-yellow-600 bg-gray-700 mb-5' />
                    <button className='w-[314px] h-[50px] bg-red-600 text-white rounded-md font-medium mb-4'>Sign Up</button>
                </div>
                <div className='flex flex-row'>
                    <p className='mr-1 text-slate-600'>You have a account?</p>
                    <Link to={'/login'} className='text-white'>Sign in now</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
