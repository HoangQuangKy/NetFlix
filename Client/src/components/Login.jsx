import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../public/logo.jpg'
function Login() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-[url('../../public/loginbg.jpg')]">
            <div className='w-full h-20 pl-12 pt-5'>
                <img src={logo} alt="" width={180} height={180} className=' bg-opacity-0' />

            </div>
            <div className='w-[450px] h-[668px] bg-black bg-opacity-80 py-12 px-[68px] flex flex-col'>
                <h1 className=' text-4xl pb-8 font-semibold'>Sign In</h1>
                <div className='items-center flex flex-col'>
                    <input type="text" placeholder='Email or phone number' className=' w-[314px] h-[50px] px-5 rounded-t-md border-b-4 border-yellow-600 mb-5 bg-gray-700' />
                    <input type="text" placeholder='Password' className=' w-[314px] h-[50px] px-5 rounded-t-md border-b-4 border-yellow-600 bg-gray-700 mb-14' />
                    <button to={'/'} className='w-[314px] h-[50px] bg-red-600  rounded-md font-medium mb-4'>Sign In</button>
                </div>
                <div className='flex flex-row justify-between mb-10'>
                    <div className='flex flex-row'>
                        <input type="checkbox" />
                        <p className='text-sm text-slate-600 ml-1'>Remember me</p>
                    </div>
                    <button className='text-sm text-slate-600'>Need helps?</button>
                </div>
                <div className='flex flex-row'>
                    <p className='mr-1 text-slate-600'>New to Netflix?</p>
                    <Link to={'/register'} className='text-white'>Sign up now</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
