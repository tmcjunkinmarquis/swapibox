import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
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
  dynamic5: PropTypes.string
};
export default Card;
