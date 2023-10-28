import React from 'react'
import './Carousel.css'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import playaround from '../../../public/playaround.png'
import add from '../../../public/add.png'
import like from '../../../public/like.png'
import down from '../../../public/down.png'
import dot from '../../../public/dot.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Số lượng phần tử hiển thị trên mỗi slide
    slidesToScroll: 4,
    variableWidth: true, // Hiển thị phần tử với kích thước khác nhau
    centerMode: false, // Hiển thị slide giữa cùng phần tử chính giữa
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
    ],
};

function KDrama() {
    const films = useSelector((state) => state.films.films)
    const categories = useSelector((state) => state.films.categories)
    const koreaFilms = films?.filter(film => film.category.includes("Korea"))
    return (
        <div className='w-full flex flex-col'>
            <p className='my-5 text-3xl font-bold'>K-Dramas</p>
            <Slider {...settings}>
                {koreaFilms && koreaFilms.map((film, index) => (
                    <button key={index} className='mx-1 h-[282px] w-[270px]'>
                        <img src={film.img} alt=""
                            width={'250px'}
                            height={'250px'}
                            className=' object-fill max-h-[140px] rounded-md'
                        />
                        <div>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center px-1 py-2'>
                                    <img src={playaround} alt="" width={25} height={25} className='mx-1' />
                                    <img src={add} alt="" width={25} height={25} className='mx-1' />
                                    <img src={like} alt="" width={25} height={25} className='pb-2 mx-1' />
                                </div>
                                <div className='flex flex-row'>
                                    <img src={down} alt="" width={50} height={50} className='pr-4' />
                                </div>
                            </div>
                            <div className='flex flex-row justify-start items-center my-3'>
                                <p className='text-sm border-solid border-slate-200 px-2 py-0 border-2 mx-1'>{film.acceptAge}+</p>
                                <p className='mx-1'>{film.episodes} Episodes</p>
                                <p className='text-xs border-solid border-slate-200 px-2 py-0 border-2 mx-1'>HD</p>
                            </div>
                            <button className='flex flex-row justify-start items-center mb-5'>
                                {film.genres.map((genre, index) => (
                                    <div key={index} className='flex flex-row items-center'>
                                        {index > 0 && <span><img src={dot} alt='' width={25} height={25}></img></span>}
                                        {genre}
                                    </div>
                                ))}
                            </button>
                        </div>
                    </button>
                ))}
            </Slider>
        </div>

    )
}

export default KDrama
