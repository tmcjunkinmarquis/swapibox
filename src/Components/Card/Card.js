import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: false,
    }
  }

  card = () => {
    
    // const { characterName, homeworld, population, species } = this.props.person
    const { dynamic1, dynamic2, dynamic3, dynamic4, dynamic5 } = this.props.element

    return (
      <div className='card'>
        <h2 className='font'>{dynamic1}</h2>
        <h3 className='font'>{dynamic2}</h3>
        <h3 className='font'>{dynamic3}</h3>
        <h3 className='font'>{dynamic4}</h3>
        <h3 className='font'>{dynamic5}</h3>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.card()}
      </div>
    )
  }
}


export default Card;

//const ofThree;
    //if(this.props.person){
      // ofThree = person
    // }else if (this.props.planet) {
      // ofThree = planet
      //const { Object.entries(dynamicItem[0]), Object.entries(dynamicItem[1]), Object.entries(dynamicItem[2]), Object.entries(dynamicItem[3]))} = this.props.ofThree
      // } else {
        //const { } = this.props.vehicle 
      // }
