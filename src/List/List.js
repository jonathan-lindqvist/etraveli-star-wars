import React from 'react'
import './List.css'

export const List = (props) => {
  const compare = (a,b) => {
    const compareBy = props.sortedBy
    let comparison = 0
    let movieA = ""
    let movieB = ""
    
    if(compareBy === "Episode"){
      movieA = a.fields.episode_id
      movieB = b.fields.episode_id
    }else{
      movieA = parseInt(a.fields.release_date.split("-")[0])
      movieB = parseInt(b.fields.release_date.split("-")[0])
    }
    
    if (movieA > movieB){
      comparison = 1
    } else {
      comparison = -1
    }
    return comparison
  }
  
  const renderMovies = () => {
    const sortedMovieList = props.movies.sort(compare)
    const filterdMovieList = sortedMovieList.filter( movie => {
      const title = movie.fields.title.toLowerCase()
      const searchQuery = props.searchQuery.toLowerCase()
      return title.includes(searchQuery) 
    })
    
    const list = filterdMovieList.map((movie) => {
      return ( 
        <div key={movie.fields.episode_id} className="movie-item" onClick={(e) => props.handleClick(movie.fields.episode_id, e)}>
          <div className="episode-title">
            <p className="movie-item-info"><small>EPISODE {movie.fields.episode_id}</small></p>
            <h3>{movie.fields.title}</h3>
          </div>
          <p className="movie-item-info"><small>{movie.fields.release_date}</small></p>
        </div>
      )
    })
    return <div>{list}</div>
  }
  
  return (
    <div className="List">
      {renderMovies()}
    </div>
  )
}
