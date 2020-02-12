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
          title: "star wars 12",
          director: "John Cena",
          year: "1983-05-17"
        },
        {
          id: 4,
          title: "star wars 2: A new hope",
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
      sortedBy: "Episode",
      searchQuery: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const { target } = e;
    const { name } = target;
    const value = target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Etraveli Star Wars</h1>
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
        <List movies={this.state.movies} sortedBy={this.state.sortedBy} searchQuery={this.state.searchQuery}/>
      </div>
    )
  }
}

export default App;
