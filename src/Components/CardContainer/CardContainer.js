import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';

export const CardContainer = ({ allState, handleFavoriteClick }) => {
  const cardClicked = allState.cardType;
  // const favorites = allState.favorites;

  const createCard = (dataInSquareBrackets) => {
    const makeCard = dataInSquareBrackets.map((element)=>{
      return <Card 
        element={element}
        handleFavoriteClick={handleFavoriteClick} />;
    });
    return makeCard;
  };

  return (
    allState[cardClicked] === 'favorites' ? 
      createCard(allState.favorites) : 
    createCard(allState[cardClicked]) 
    // allState.cardType && createCard(allState[cardClicked])
  );
};

CardContainer.propTypes = {
  cardType: PropTypes.string,
  film: PropTypes.array,
  people: PropTypes.array,
  vehicles: PropTypes.array,
  planets: PropTypes.array,
  cleanedCardData: PropTypes.array,
  ititialFetchedObj: PropTypes.array
};

  