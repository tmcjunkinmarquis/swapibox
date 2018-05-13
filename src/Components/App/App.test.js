import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.js';
import { shallow } from 'enzyme';

describe('App', () => {
    let app;
    

    beforeEach( async () => {
        app = shallow(<App />, {disableLifecycleMethods: true})

    })

    it.skip('should match the snapshot', () => {
        const appSnapShot = renderer.create(app).JSON;

        expect(appSnapShot).toMatchSnapshot();
    })
    it('should have default states', async () => {
        // console.log(wrapper)
       const wrapper = await shallow(<App />)
        expect(wrapper.state().film).toEqual([])
        expect(wrapper.state().people).toEqual([])
        expect(wrapper.state().vehicles).toEqual([])
        expect(wrapper.state().planets).toEqual([])
        expect(wrapper.state().cleanedCardData).toEqual([])

    })

    it('should setState', () => {

    })

    it('should call fetchApi', () => {

    })

    it('should call checkCardType with the correct params', () => {

    })
    
    it('should update vehicle ste when getVehicleData is called', () => {

    })

    it('conbineObj should return correct Obj')

})