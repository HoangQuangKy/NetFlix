import React from 'react'
import { useEffect, useState } from 'react';
import { getFilm } from '../../../services';
function NewRealse() {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        getFilm()
            .then((response) => {

            })
    })

    return (
        <div className='w-full'>

        </div>
    )
}

export default NewRealse
