import React from 'react'
import play from '../../../public/play.png'
import info from '../../../public/info.png'
import replay from '../../../public/replayVideo.png'
import { useSelector } from 'react-redux'
import trailer from '../../../public/trailer.mp4'
import Video from './Video'
import { useState } from 'react'

function FilmHeader() {
    const films = useSelector((state) => state.films.films);
    const randomFilm = useSelector((state) => state.films.randomFilm);


    return (
        <div className='w-full'>
            {randomFilm && (
                <div className='w-full relative'>
                    <div className='w-full h-[760px] relative'>
                        <Video
                            imgSrc={randomFilm.img}
                            videoSrc={trailer}
                        ></Video>

                    </div>
                    <p className=' absolute top-[400px] left-10 text-6xl font-semibold w-[486px] z-10'>{randomFilm.filmName}</p>
                    <div className='absolute top-[600px] left-10 w-[1880px] flex flex-row justify-between items-center z-10'>
                        <div className='flex flex-row'>
                            <button className='bg-white px-6 text-black font-semibold text-md rounded-md py-2 mr-3 flex flex-row justify-around items-center'>
                                <img src={play} alt="" width={25} height={25} className='mr-3' />
                                Play
                            </button>
                            <button className='bg-slate-400 px-5 text-white font-semibold text-md rounded-md py-2 mr-3 flex flex-row justify-around bg-opacity-50 items-center'>
                                <img src={info} alt="" width={25} height={25} className='mr-3' />
                                More info
                            </button>
                        </div>
                        <div className='flex flex-row items-center'>
                            <button className='mr-4'>
                                <img src={replay} alt="" width={50} height={50} className='' />
                            </button>
                            <p className='text-2xl pl-3 pr-12 border-white border-l-2 bg-opacity-30 py-1 bg-slate-700'>{randomFilm.acceptAge}+</p>

                        </div>
                    </div>
                </div >
            )
            }
        </div >
    )
}

export default FilmHeader
