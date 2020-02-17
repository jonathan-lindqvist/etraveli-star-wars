import React, { Component } from 'react'
import './SelectedMovie.css'

class SelectedMovie extends Component {
  constructor(props){
    super(props)

    this.handleSelectedMovie = this.handleSelectedMovie.bind(this)
  }

  handleSelectedMovie(){
    const list = this.props.selected.map((movie) => {
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

  render() {
    let info = ""
    if(this.props.selected === ""){
      info = <p className="no-movie">No movie Selected</p>
    }else{
      info = this.handleSelectedMovie()
    }

    return (
      <div className="SelectedMovie">
        {info}
      </div>
    )
  }
}

export default SelectedMovie
