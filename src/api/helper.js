import { singleUrl } from './api';

export const getHomeWorld = async (categoryObj) => {
  const categoryArray = categoryObj.results;
  const unresolvedPromises = categoryArray.map(async (peopleKey) => {
    const data = await singleUrl(peopleKey.homeworld)
    return {
      dynamic1: peopleKey.name,
      dynamic2: data.name,
      dynamic3: data.population,
    }
  })
  return await Promise.all(unresolvedPromises)
}

export const getSpecies = async (categoryData) => {
  const categoryArray = categoryData.results
  const unresolvedPromises = await categoryArray.map(async (peopleKey) => {
    const data = await singleUrl(peopleKey.species)
    return { dynamic4: data.name }
  })
  return await Promise.all(unresolvedPromises)
}

const getPlanetResidents = async (residents) => {
  const unresolvedPromises = residents.map(async resident => {
    const response = await singleUrl(resident)
    // const name = await response.json()
    return response;
  })
  return await Promise.all(unresolvedPromises);
}

export const getPlanetDetails = async (categoryData) => {
  const categoryArray = categoryData.results
  const unresolvedPromises = categoryArray.map(async (planet) => {
    const { name, terrain, climate, population, residents } = planet;
    const residentArr = await getPlanetResidents(residents);
    const residentName = residentArr.map((resident) => {
      return resident.name
    })
    return {
      dynamic1: name,
      dynamic2: climate,
      dynamic3: terrain,
      dynamic4: population,
      dynamic5: residentName.join(', ')
    }
  })
  return await Promise.all(unresolvedPromises)
}

export const getVehicleDetails = (categoryObj) => {
  const categoryArray = categoryObj.results;
  const unresolvedPromises = categoryArray.map((car) => {
    const { name, model, manufacturer, passengers } = car;
    return {
      dynamic1: name,
      dynamic2: model,
      dynamic3: manufacturer,
      dynamic4: passengers
    }
  })
  return unresolvedPromises
}