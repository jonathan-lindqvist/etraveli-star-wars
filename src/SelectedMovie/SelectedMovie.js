import React from 'react'
import './SelectedMovie.css'

export const SelectedMovie = (props) => {
  const handleSelectedMovie = () => {
    const list = props.selected.map((movie) => {
      return ( 
        <div key={movie.id} className="movie-details">
          <h2>{movie.fields.title}</h2>
          <p>{movie.fields.opening_crawl}</p>
          <p>Directed by: {movie.fields.director}</p>
        </div>
      )
    })
    return <div>{list}</div>
  }

  const selected = () => {
    let info = ""
    if(props.selected === ""){
      info = <p className="no-movie">No movie Selected</p>
    }else{
      info = handleSelectedMovie()
    }

    return (
      <div className="SelectedMovie">
        {info}
      </div>
    )
  }

  return selected()
}

export default SelectedMovie
