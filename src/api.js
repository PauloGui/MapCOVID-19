const path = 'https://api.covid19api.com/dayone/country'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

function getCountry(country) {
  return fetch(`${path}/${country}`, headers)
    .then((response) => response.json())
}

export default {
  getCountry
}