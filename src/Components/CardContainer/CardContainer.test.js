import React from 'react';
import {shallow } from 'enzyme';
import CardContainer from '../CardContainer/CardContainer';

describe('CardContainer', () => {
  const CardContainer = ()=>(
    <div></div>
  )

  let cardContainer;
  let props = { 
    cardType: 'people',
    film: [],
    people: [],
    vehicles: [],
    planets: [],
    cleanedCardData: [],
    initialFetchedObj: []
   };

  beforeEach(() => {
    cardContainer = shallow(<CardContainer {...props} />)
  });

  it('matches snapshot', () => {
    expect(cardContainer).toMatchSnapshot();
  });
});