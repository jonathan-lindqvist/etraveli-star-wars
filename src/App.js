import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          id: 2,
          title: "star wars 1",
          director: "John Cena",
          year: "1000"
        },
        {
          id: 4,
          title: "star wars 2",
          director: "John Cena",
          year: "1001"
        },
        {
          id: 0,
          title: "star wars 3",
          director: "John Cena",
          year: "1002"
        }
      ]
    }
  }

  renderMovies(){
    const list = this.state.movies.map((movie) => {
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
      <div className="App">
        <h1>Etraveli Star Wars</h1>
        {this.renderMovies()}
      </div>
    )
  }
}

export default App;
