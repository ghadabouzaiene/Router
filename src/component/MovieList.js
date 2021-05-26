import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import './MovieList.css'

//mapping the movie list to display each element of the array of objects  (data) as a card 

const MovieList = ({movieList}) => {
    return (
        
        <div className='movie-list'>  
          {movieList.map(movie=><Link  to={`/description/${movie.id}`}><MovieCard  movieCard={movie}></MovieCard></Link>)}
        </div>
    )
}

export default MovieList;