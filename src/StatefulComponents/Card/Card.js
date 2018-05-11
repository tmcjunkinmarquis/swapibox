import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: false,

    }
  }

  card = () => {
    
    const { characterName, homeworld, population, species } = this.props.person

    //const ofThree;
    //if(this.props.person){
      // ofThree = person
    // }else if (this.props.planet) {
      // ofThree = planet
      //const { Object.entries(dynamicItem[0]), Object.entries(dynamicItem[1]), Object.entries(dynamicItem[2]), Object.entries(dynamicItem[3]))} = this.props.ofThree
      // } else {
        //const { } = this.props.vehicle 
      // }
      
    return (
      <div className='card'>
        <h2 className='font'>{characterName}</h2>
        <h3 className='font'>{homeworld}</h3>
        <h3 className='font'>{population}</h3>
        <h3 className='font'>{species}</h3>
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