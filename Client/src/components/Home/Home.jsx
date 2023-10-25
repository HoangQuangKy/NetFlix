import React from 'react'
import Header from './Header'
import FilmHeader from './FilmHeader'
import KDrama from './KDrama'

function Home() {
    return (
        <div className='w-full flex flex-col'>
            <Header></Header>
            <FilmHeader></FilmHeader>
            <KDrama></KDrama>
        </div>
    )
}

export default Home
