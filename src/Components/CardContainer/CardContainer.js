import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';

export const CardContainer = ({ allState }) => {
  const cardClicked = allState.cardType;

  const createCard = (dataInSquareBrackets) => {
    const makeCard = dataInSquareBrackets.map((element)=>{
      return <Card element={element} />;
    });
    return makeCard;
  };

  return (
    allState.cardType && createCard(allState[cardClicked])
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

  