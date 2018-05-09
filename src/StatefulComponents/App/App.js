import React, { Component } from 'react';
import FilmCrawl from '../FilmCrawl/FilmCrawl';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }


  
  
  render() {
    return (
      <div className="App">
        <FilmCrawl />
      </div>
    );
  }
}

export default App;
