import React from 'react';

import Card from '../Card/Card';

export const CardContainer = ({ allState }) => {
  const cardClicked = allState.cardType

  const createCard = (data) => {
    const makeCard = data.map((element)=>{
      return <Card element={element} />
    })
    return makeCard;
  }

  return (
    allState.cardType && createCard(allState[cardClicked])
  )
}

  