import React, { Component } from 'react';
import FilmCrawl from '../FilmCrawl/FilmCrawl';
import './App.css';
import CardContainer from '../../StatefulComponents/CardContainer/CardContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardType: ''
    }
  }

  handleClick =(event)=> { 
    this.setState({cardType : event.target.value})
  }

  render() {
    return (
      <div className="App">
        <div crawl="crawl">
          <FilmCrawl />
        </div>
        <div buttons="buttons">
        <button onClick={this.handleClick} value="people" className="button">People</button>
        <button className="button">Planets</button>
        <button className="button">Vehicles</button>
        <button className="button">Favorites</button>
        </div>
        <div>
          {this.state.cardType && <CardContainer cardContainer="card-container" cardType={this.state.cardType} />}
          
        </div>
      </div>
    );
  }
}

export default App;
