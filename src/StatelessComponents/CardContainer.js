import React, { Component } from 'react';
import callApi from '../apiCalls/filmCrawlApiCall';


class CardContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      cardType: ''
    }
  }

  async componentDidMount(){
    const { cardType } = this.props
    const data = await callApi(cardType)

  }

  const getCards = () => {
    
  }

  render(){
    return(
      <div>
        {getCards()}
      </div>
    )
  }
}