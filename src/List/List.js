import React, { Component } from 'react'
import './List.css'

class List extends Component {
  constructor(props){
    super(props)

    this.compare = this.compare.bind(this)
  }

  compare(a,b){
    const compareBy = this.props.sortedBy
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
  
  renderMovies(){
    const sortedMovieList = this.props.movies.sort(this.compare)
    const filterdMovieList = sortedMovieList.filter( movie => {
      const title = movie.fields.title.toLowerCase()
      const searchQuery = this.props.searchQuery.toLowerCase()
      return title.includes(searchQuery) 
    })

    const list = filterdMovieList.map((movie) => {
      return ( 
        <div key={movie.fields.episode_id} className="movie-item" onClick={(e) => this.props.handleClick(movie.fields.episode_id, e)}>
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

  render() {
    return (
      <div className="List">
        {this.renderMovies()}
      </div>
    )
  }
}

export default List
