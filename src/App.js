import React, { Component } from 'react'
import './App.css'
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          id: 2,
          title: "star wars 1",
          director: "John Cena",
          year: "1983-05-17"
        },
        {
          id: 4,
          title: "star wars 2",
          director: "John Cena",
          year: "1980-05-17"
        },
        {
          id: 0,
          title: "star wars 3",
          director: "John Cena",
          year: "1988-05-17"
        }
      ],
      sortedBy: "Episode"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      sortedBy: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Etraveli Star Wars</h1>
        <form>
          <label>
            Sort by: 
            <select value={this.state.sortedBy} onChange={this.handleChange}>
              <option value="Episode">Episode</option>
              <option value="Year">Year</option>
            </select>
          </label>
        </form>
        <List movies={this.state.movies} sortedBy={this.state.sortedBy}/>
      </div>
    )
  }
}

export default App;
