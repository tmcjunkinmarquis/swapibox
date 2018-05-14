import React, { Component } from 'react';
import FilmCrawl from '../FilmCrawl/FilmCrawl';
import { CardContainer } from '../CardContainer/CardContainer';
import { 
  getHomeWorld, 
  getSpecies, 
  getPlanetDetails, 
  getVehicleDetails
} from '../../api/helper';
import { fetchApi } from '../../api/api';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardType: '',
      film: [],
      people: [],
      vehicles: [],
      planets: [],
      cleanedCardData: [],
      initialFetchedObj: [],
      favorites: []
    };
  }

  handleFavoriteClick = (content) => {
    const foundItem = this.state.favorites.find(fave => {
      return content.dynamic1 === fave.dynamic1; 
    });

    if (!foundItem){
      this.setState({ favorites: [...this.state.favorites, content] });
    } else {
      const stillFavorite = this.state.favorites.filter(fave => {
        return content.dynamic1 !== fave.dynamic1; 
      });
      this.setState({ favorites: stillFavorite });
    }
  }

  handleClick = (event) => {
    this.setState({
      cardType: event.target.value
    }, () => {
      this.initialFetchCall();
    });   
  }

  initialFetchCall = async () => {
    if (this.state.cardType !== 'favorites' ){
      const categoryData = await fetchApi(this.state.cardType);

      this.checkCardType(categoryData);
    }
  }

  getpeopleData = async (categoryData) => {
    const homeWorldObj = await getHomeWorld(categoryData);
    const speciesObj = await getSpecies(categoryData);
    const cleanedCardData = this.combineObj(homeWorldObj, speciesObj);

    this.setState({ people: cleanedCardData });
  }

  getVehicleData = async (categoryData) => {
    const vehicleObj = await getVehicleDetails(categoryData);

    this.setState({ vehicles: vehicleObj });
  }

  getPlanetData = async (categoryData) => {
    const planetObj = await getPlanetDetails(categoryData);

    this.setState({planets: planetObj});
  }

  checkCardType = async (categoryData) => {
    if (this.state.cardType === 'people') {
      this.getpeopleData(categoryData);
    } else if (this.state.cardType === 'planets') {
      this.getPlanetData(categoryData);
    } else if (this.state.cardType === 'vehicles') {
      this.getVehicleData(categoryData);
    }

    localStorage.setItem([this.props.cardType], 
      JSON.stringify(this.state[this.props.cardType]));
  }

  combineObj = (homeWorldObj, speciesObj) => {
    let combo;
    const combinedObj = homeWorldObj.reduce((acc, item, index) => {
      combo = Object.assign({}, speciesObj[index]);
      acc.push({ ...item, ...combo });
      return acc;
    }, []);
    return combinedObj;
  }


  // checkForLocalStorage = () => {
  //   !localStorage[this.state.cardType] ? this.initialFetchCall() : this.getFromLocalStorage()
  // }

  // getFromLocalStorage = () => {
  //   const retrieveData = localStorage.getItem((this.state.cardType)
  //   const parsedData = JSON.parse(retrieveData)
  // }

  render() {
    return (
      <div className="app">
       <div class="project-name">Star Wars API Project</div>
        <div className="buttons">
          <button 
            onClick={this.handleClick} 
            value="people" 
            className="button">People
          </button>
          <button 
            onClick={this.handleClick} 
            value="planets" 
            className="button">Planets
          </button>
          <button 
            onClick={this.handleClick} 
            value="vehicles" 
            className="button">Vehicles
          </button>
          <button 
            onClick={this.handleClick}

            value="favorites"
            className="button">Show my faves!!
          </button>
        </div>
        <section className='card-Container'>
          {this.state.cardType && 
          <CardContainer 
            
            handleFavoriteClick={this.handleFavoriteClick}
            className="card-container" 
            allState={this.state} 
          />}
        </section>
        <div className="crawl">
          <FilmCrawl />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  cardType: PropTypes.string
};

export default App;
