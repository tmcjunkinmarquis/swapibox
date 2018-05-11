export const apiCalls = async (dynamicVariable) => {
  const mainUrl = 'https://swapi.co/api'
  const response = await fetch(`${mainUrl}/${dynamicVariable}`)
  const parsed = await response.json()
  return parsed
}

export const homeworldCall = (data) => {
  try {
    const dataArr = data.results;
    console.log(dataArr)
    const unresolvedPromises = dataArr.map(async (item) => {
      const response = await fetch(item.homeworld)
      const data = await response.json()

      return { 
        dynamic1: item.name,
        dynamic2: data.name,
        dynamic3: data.population 
      }
    })
    return Promise.all(unresolvedPromises)
  } catch (error) {
    throw new Error('unsuccessful fetch for homeworlds')
  }
}


export const speciesCall = (data)=>{
  try {
    const dataArr = data.results;
    const unresolvedPromises = dataArr.map(async (item) => {
      const response = await fetch(item.species)
      const data = await response.json()

      return { dynamic4: data.name,  }
    })
    return Promise.all(unresolvedPromises)
  } catch (error) {
    throw new Error('unsuccessful fetch for species')
  }
}

export const getVehicleDetails = (categoryObj) => {

  const categoryArray = categoryObj.results;

  const unresolvedPromises = categoryArray.map(async (car) => {
    const { name, model, manufacturer, passengers } = car;
    return {
      dynamic1: name,
      dynamic2: model,
      dynamic3: manufacturer,
      dynamic4: passengers
    }
  })
  return Promise.all(unresolvedPromises)
}

export const getPlanetDetails = (categoryData) => {
  const categoryArray = categoryData.results

  const unresolvedPromises = categoryArray.map(async (planet) => {
    const { name, terrain, climate, population, residents } = planet;
    const residentNames = await getPlanetResidents(residents);

    return {
      dynamic1: name,
      dynamic2: climate,
      dynamic3: terrain,
      dynamic4: population,
      dynamic5: residentNames.join(', ')
    }
  })
  return Promise.all(unresolvedPromises)
}

const getPlanetResidents = (residents) => {
  const unresolvedPromises = residents.map(async (resident) => {
    const { name } = await apiCalls(resident)
    return name;
  })
  return Promise.all(unresolvedPromises);
}

// const decider = (specific)=>{
  // if (specific === species)
// }

// export const secondCall = (data)=>{
//   try {
//     const dataArr = data.results;
//     const unresolvedPromises = dataArr.map(async (item) => {
//       const response = await fetch(item.species)
//       const data = await response.json()

//       return { species: data.name,  }
//     })
//     return Promise.all(unresolvedPromises)
//   } catch (error) {
//     throw new Error('unsuccessful fetch for species')
//   }
// }
