import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 px-2'>
        <img 
            alt='Movie Card'
            src={IMAGE_CDN_URL+posterPath}
         />
    </div>
  )
}

export default MovieCard