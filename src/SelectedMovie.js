import React, { Component } from 'react'

class SelectedMovie extends Component {
  constructor(props){
    super(props)

    this.handleSelectedMovie = this.handleSelectedMovie.bind(this)
  }

  handleSelectedMovie(){
    const list = this.props.selected.map((movie) => {
      return ( 
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.opening_crawl}</p>
          <p>Directed by: {movie.director}</p>
        </div>
      )
    })
    return <div>{list}</div>
  }

  render() {
    let info = ""
    if(this.props.selected === ""){
      info = <p>No movie Selected</p>
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
