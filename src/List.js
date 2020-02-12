import React, { Component } from 'react'

class List extends Component {
  constructor(props){
    super(props)

    this.compare = this.compare.bind(this);
  }


  compare(a,b){
    const compareBy = this.props.sortedBy
    let comparison = 0
    
    if(compareBy === "Episode"){
      const episodeA = a.id
      const episodeB = b.id
      if (episodeA > episodeB){
        comparison = 1
      } else {
        comparison = -1
      }

      return comparison
    }

    if(compareBy === "Year"){
      const episodeA = parseInt(a.year.split("-")[0])
      const episodeB = parseInt(b.year.split("-")[0])
      if (episodeA > episodeB){
        comparison = 1
      } else {
        comparison = -1
      }

      return comparison
    }
  }
  
  renderMovies(){
    const sortedMovieList = this.props.movies.sort(this.compare)
    const list = sortedMovieList.map((movie) => {
      return ( 
        <div key={movie.id} className="movie-item">
          <p>{movie.id}</p>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
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

export default List;
