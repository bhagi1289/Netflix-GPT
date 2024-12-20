import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies);
    return (
        <div className='px-6'>
            <h1 className='text-3xl text-white py-4'>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-none'>
                <div className='flex px-6'>
                    { movies?.map((movie) => (<MovieCard key={movie?.id} posterPath={movie?.poster_path}/>)) }
                </div>
            </div>

        </div>
    )
}

export default MovieList