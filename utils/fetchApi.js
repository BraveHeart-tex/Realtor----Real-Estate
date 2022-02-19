import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '90e05aa96cmsha8ae8b7c71889e1p1b487ejsn0abd4e869d0f',
    },
  })

  return data
}
