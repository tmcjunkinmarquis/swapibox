import { fetchApi } from './api';

describe('api', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: 'return results',
      })
    }))
  })

  it('should call fetch', async () => {
    expect(window.fetch).not.toHaveBeenCalled()
    await fetchApi()
    expect(window.fetch).toHaveBeenCalled()
  })

  it('should throw an error', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404,
    }))

    const expectedError = Error('Initial fetch failed')
    expect(fetchApi('')).rejects.toEqual(expectedError)
  })
})