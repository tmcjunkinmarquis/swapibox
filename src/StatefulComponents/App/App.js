import React, { Component } from 'react';
import FilmCrawl from '../FilmCrawl/FilmCrawl';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.cardType = ''
  }


  
  
  render() {
    return (
      <div className="App">
        <div crawl="crawl">
          <FilmCrawl />   
        </div>
        <div buttons="buttons">
          <button>People</button>
          <button>Planets</button>
          <button>Vehicles</button>
        </div>
        <div>
          <CardContainer cardContainer="card-container" cardType={this.state.cardType}/>
        </div>
      </div>
    );
  }
}

export default App;
