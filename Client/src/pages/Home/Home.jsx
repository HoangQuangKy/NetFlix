import React from 'react'
import Header from './Header'
import FilmHeader from './FilmHeader'

function Home() {
    return (
        <div className='w-full flex flex-col'>
            <Header></Header>
            <FilmHeader></FilmHeader>
        </div>
    )
}

export default Home
