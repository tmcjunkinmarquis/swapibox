import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css'
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite:  false
    };
  }

  handleClick = ()=>{
    this.props.handleFavoriteClick(this.props.element);
  }

  card = () => {
    const { 
      dynamic1, 
      dynamic2, 
      dynamic3, 
      dynamic4, 
      dynamic5 
    } = this.props.element;

    return (
      
      <div className='card'>
        <button 
          onClick={this.handleClick}
        >Make me a fave!</button>
        <h2 className='font'>{dynamic1}</h2>
        <h3 className='font'>{dynamic2}</h3>
        <h3 className='font'>{dynamic3}</h3>
        <h3 className='font'>{dynamic4}</h3>
        <h3 className='font'>{dynamic5}</h3>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.card()}
      </div>
    );
  }
}

Card.propTypes = {
  element: PropTypes.object,
  dynamic1: PropTypes.string,
  dynamic2: PropTypes.string,
  dynamic3: PropTypes.string,
  dynamic4: PropTypes.string,
  dynamic5: PropTypes.string,
  handleFavoriteClick: PropTypes.func
};

export default Card;
