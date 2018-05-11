import React, { Component } from 'react';
import { apiCalls } from '../../apiCalls/apiCalls';
import './CardContainer.css';
import { homeworldCall, speciesCall, getVehicleDetails, getPlanetDetails } from '../../apiCalls/apiCalls';
import Card from '../Card/Card';

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      vehicles: [],
      planets: [],
      initialFetchedObj: [], 
      cleanedCardData: []
    }
  }

  // async componentDidMount() {
  //   const { cardType } = this.props

  //   // if(!this.state[cardType].length){
  //     const data = await apiCalls(cardType)

  //     this.setState({initialFetchedObj: {...data, cardType: cardType}}, 
  //       () => { this.checkCardType()})
  //   // }
  // }

  initialFetchCall = async () => {
    const { cardType } = this.props

    // if(!this.state[cardType].length){
    const data = await apiCalls(cardType)

    this.setState({ initialFetchedObj: { ...data, cardType: cardType } },
      () => { this.checkCardType() })
    // }
  }

  checkCardType = async () => {
    if (this.state.initialFetchedObj.cardType === 'people') {
      console.log('hi')
      const homeworldObj = await homeworldCall(this.state.initialFetchedObj)
      const speciesObj = await speciesCall(this.state.initialFetchedObj)
      const cleanedCardData = this.combinedObj(homeworldObj, speciesObj)

      this.setState({ people: cleanedCardData }) //set resolved promise to state
    }
    else if (this.state.initialFetchedObj.cardType === 'planets') {
      console.log('bitch')
      const planetObj = await getPlanetDetails(this.state.initialFetchedObj)

      this.setState({ planetData: planetObj })
    }
    else if (this.state.initialFetchedObj.cardType === 'vehicles') {
      // console.log(this.state.initialFetchedObj)
      const vehicleObj = await getVehicleDetails(this.state.initialFetchedObj)

      this.setState({ vehicles: vehicleObj })
  }
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
    const makeCard = data.map((element) => {
      return (
        <Card element={element} />
      )
    })
    return makeCard
  }

  render() {
    this.initialFetchCall()
     return (
       <div> {this.createCard(this.state[this.props.cardType])}</div >
     )  
   }
  }

export default CardContainer;
