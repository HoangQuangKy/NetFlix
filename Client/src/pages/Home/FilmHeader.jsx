import React from 'react'
import { getFilm } from '../../../services'
import play from '../../../public/play.png'
import info from '../../../public/info.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilms } from '../../redux/slice/film.slice';
import replay from '../../../public/replayVideo.png'

function FilmHeader() {
    const dispatch = useDispatch();
    const films = useSelector((state) => state.films.films);
    const randomFilm = useSelector((state) => state.films.randomFilm);


    useEffect(() => {
        getFilm()
            .then((response) => {
                const filmsData = response.data.data
                const randomIndex = Math.floor(Math.random() * filmsData.length);
                const randomFilm = filmsData[randomIndex];

                dispatch(setFilms({ films: filmsData, randomFilm: randomFilm }));
            })
            .catch((error) => {
                console.error('Lỗi khi gọi API:', error);
            });
    }, [dispatch]);
    return (
        <div className='w-full'>
            {randomFilm && (
                <div className='w-full relative]'>
                    <img src={randomFilm.img} alt="" className='w-full h-[760px] block' />
                    <p className=' absolute top-[300px] left-10 text-6xl font-semibold w-[486px]'>{randomFilm.filmName}</p>
                    <div className='absolute top-[600px] left-10 w-[1880px] flex flex-row justify-between items-center'>
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
                            <p className='text-2xl pl-3 pr-12 border-white border-l-2 bg-opacity-30 py-1 bg-slate-700'>16+</p>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FilmHeader
