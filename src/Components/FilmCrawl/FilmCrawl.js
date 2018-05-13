import React, { Component } from 'react';
import { fetchApi } from '../../api/api';

// import './FilmCrawl.css';

class FilmCrawl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cleanFilmData: {}
    };
  }

  cleaner = (filmData) => {
    const { 
      title, 
      release_date, 
      opening_crawl 
    } = filmData;
    return { title, release_date, opening_crawl };
  }
  
  async componentDidMount() {
    const randomOnetoSeven = Math.floor((Math.random() * 6) + 1);
    const dynamicVariable = `films/${randomOnetoSeven}`;
    const filmData = await fetchApi(dynamicVariable);
    const cleanFilmData = this.cleaner(filmData);
    this.setState({cleanFilmData});
  }

  render(){
    return (
      <div>
        <h1>{this.state.cleanFilmData.title}</h1>
        <h2>{this.state.cleanFilmData.release_date}</h2>
        <h3>{this.state.cleanFilmData.opening_crawl}</h3>

      </div>
    );
  }

}

export default FilmCrawl;
