export const apiCalls = async (dynamicVariable) => {
  const mainUrl = 'https://swapi.co/api'
  const response = await fetch(`${mainUrl}/${dynamicVariable}`)
  const parsed = await response.json()
  return parsed
}

export const homeworldCall = (data) => {
  try {
    const dataArr = data.results;
    const unresolvedPromises = dataArr.map(async (item) => {
      const response = await fetch(item.homeworld)
      const data = await response.json()

      return { characterName: item.name, homeworld: data.name, population: data.population }
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

      return { species: data.name,  }
    })
    return Promise.all(unresolvedPromises)
  } catch (error) {
    throw new Error('unsuccessful fetch for species')
  }
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
