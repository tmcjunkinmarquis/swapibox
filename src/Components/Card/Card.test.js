import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Card/Card';

describe('Card', () => {
  const Card = () => (
    <div></div>
  );
  let card;
  let props = { dynamic1: 'R2-D2' };
  beforeEach(()=>{
    card = shallow(<Card {...props}/>) 
  })

  it('matches snapshot', () => {
    expect(card).toMatchSnapshot();
  });

  it('',()=>{
    const { dynamic1 } = props
    const itemNameElement = <h2>{dynamic1}</h2>
    expect(card.contains(itemNameElement)).toEqual(true)
  })

})


