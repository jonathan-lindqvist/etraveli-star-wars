import React, { Component } from 'react'

class List extends Component {
  constructor(props){
    super(props)

    this.compare = this.compare.bind(this);
  }

  compare(a,b){
    const compareBy = this.props.sortedBy
    let comparison = 0
    let movieA = ""
    let movieB = ""
    
    if(compareBy === "Episode"){
      movieA = a.id
      movieB = b.id
    }else{
      movieA = parseInt(a.year.split("-")[0])
      movieB = parseInt(b.year.split("-")[0])
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
      const title = movie.title.toLowerCase()
      const searchQuery = this.props.searchQuery.toLowerCase()
      return title.includes(searchQuery) 
    })

    const list = filterdMovieList.map((movie) => {
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
