export const apiCall = async (dynamicVariable) => {
  const mainUrl = 'https://swapi.co/api'
  const response = await fetch(`${mainUrl}/${dynamicVariable}`)
  const parsed = await response.json()
  return parsed
}