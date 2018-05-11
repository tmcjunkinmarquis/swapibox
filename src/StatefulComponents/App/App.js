import React, { Component } from 'react';
import FilmCrawl from '../FilmCrawl/FilmCrawl';
import './App.css';
import CardContainer from '../../StatefulComponents/CardContainer/CardContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardType: 'people'
    }
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
          <button>Favorites</button>
        </div>
        <div>
          <CardContainer cardContainer="card-container" cardType={this.state.cardType} />
        </div>
      </div>
    );
  }
}

export default App;
