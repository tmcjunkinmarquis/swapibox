import React from 'react';
import FilmCrawl from './FilmCrawl';
import { shallow } from 'enzyme';

describe('Film Crawl', ()=>{
  const FilmCrawl = ()=> (
    <div></div>
  );
  
  let filmCrawl;
  let mockFirstState = {
    cleanFilmData: {}
  };
  let mockCleaner = jest.fn();
  let mockCleanFilmData = {
    title: 'Ho Hum',
    release_date: 'May 11, 1965',
    opening_crawl: 'stuff, stuff, stuff, etc.'

  }

  beforeEach(()=>{
    filmCrawl = shallow(<FilmCrawl />);
  });

  it('should match the snapshot', () => {
    expect(filmCrawl).toMatchSnapshot();
  });

  it('updates state when it first renders', () => {
    const expectedState = {
      cleanFilmData: mockCleanFilmData
    }

    filmCrawl.instance().setState(mockFirstState);
    filmCrawl.instance.mockCleaner();
    filmCrawl.instance().setState(mockCleanFilmData);


    expect(filmCrawl.state('title')).toBe('ho Hum');
  });
});