import React, { Component } from 'react';
import { apiCalls } from '../../apiCalls/apiCalls';
import './CardContainer.css';
import { homeworldCall, speciesCall } from '../../apiCalls/apiCalls';
import Card from '../Card/Card';

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      vehicleData: [],
      planetsData: []
    }
  }

  componentDidMount() {
    if(!this.state[this.props.cardType].length){
      this.checkCardType(this.props.cardType)
    }
  }

  // async componentDidMount() {
  //   if (this.props.cardType &&
  //     this.props.cardType !== "null") {
  //     const { cardType } = this.props
  //     const data = await apiCalls(cardType)
  //     const homeworldObj = await homeworldCall(data)
  //     const speciesObj = await speciesCall(data)
  //     const cleanedCardData = this.combinedObj(homeworldObj, speciesObj)

  //     this.setState({ peopleData: cleanedCardData })
  //   }
  checkCardType = async (cardtype) => {
    const { cardType } = this.props

    const data = await apiCalls(cardType)
    const homeworldObj = await homeworldCall(data)
    const speciesObj = await speciesCall(data)
    const cleanedCardData = this.combinedObj(homeworldObj, speciesObj)
    console.log(homeworldObj)
    this.setState({ [cardtype]: cleanedCardData })
  }

  combinedObj = (homeworldObj, speciesObj) => {
    let combo;
    const combinedObj = homeworldObj.reduce((acc, item, i) => {
      combo = Object.assign({}, speciesObj[i])
      acc.push({ ...item, ...combo })
      return acc
    }, [])
    return combinedObj
  }

  createCard = (data) => {
    const makeCard = data.map((person) => {
      return (
        <Card person={person} />
      )
    })
    return makeCard
  }

  render() {
     return (
       <div> {this.createCard(this.state[this.props.cardType])}</div >
     )  
   }
  }

export default CardContainer;
