import React, { Component } from 'react';
import { apiCalls } from '../../apiCalls/apiCalls';
import './CardContainer.css';
import { homeworldCall, speciesCall } from '../../apiCalls/apiCalls';

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peopleData: [],
      vehicleData: [],
      planetsData: []
    }
  }

  async componentDidMount() {
    const { cardType } = this.props
    const data = await apiCalls(cardType)
    const homeworldObj = await homeworldCall(data)
    const speciesObj = await speciesCall(data)
    const cleanedCardData = this.combinedObj(homeworldObj, speciesObj)
    console.log(cleanedCardData)
    this.setState({ peopleData: cleanedCardData })
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

  render() {
    console.log(this.state.peopleData)
    return (
      <div>
        {/* <Card /> */}
      </div>
    )
  }
}

export default CardContainer;
