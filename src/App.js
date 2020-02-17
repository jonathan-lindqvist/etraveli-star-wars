import React, { Component } from 'react'
import './App.css'
import List from './List';
import SelectedMovie from './SelectedMovie';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      sortedBy: "Episode",
      searchQuery: "",
      selected: "",
      loading: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    fetch('https://star-wars-api.herokuapp.com/films')
      .then(response => {
        return response.json();
      })
      .then((movies) => {
        this.setState({
          movies: movies,
          loading: false
        })
      });
  }

  handleChange(e){
    const { target } = e;
    const { name } = target;
    const value = target.value;
    this.setState({
      [name]: value
    })
  }

  handleClick(id,e){
    const clickedMovie = this.state.movies.filter( movie => movie.id === id)
    this.setState({
      selected: clickedMovie
    })
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Sort by: 
            <select name="sortedBy" value={this.state.sortedBy} onChange={this.handleChange}>
              <option value="Episode">Episode</option>
              <option value="Year">Year</option>
            </select>
          </label>
          <input
            name="searchQuery"
            placeholder="Type to search..."
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
        <div className="movie-list">
          {this.state.loading ? <p>Loading</p> : <List movies={this.state.movies} sortedBy={this.state.sortedBy} searchQuery={this.state.searchQuery} handleClick={this.handleClick}/> }
          <SelectedMovie selected={this.state.selected} />
        </div>
      </div>
    )
  }
}

export default App
