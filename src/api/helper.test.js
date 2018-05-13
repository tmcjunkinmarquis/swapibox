import { getHomeWorld, getSpecies } from './helper.js';
import { mockPeople, mockPeopleObj, mockHomeWorld } from '../mockData.js';

describe('getHomeWorld', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockHomeWorld
      })
    })
    )
  })

  it('getHomeWorld should call fetch with the correct params', async () => {
    expect(window.fetch).not.toHaveBeenCalled()
    await getHomeWorld(mockPeopleObj)
    expect(window.fetch).toHaveBeenCalledWith(mockPeopleObj.results[0].homeworld)
  })

  it('getHomeWorld should throw and error', () => {

  })
})