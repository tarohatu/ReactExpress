import axios from 'axios';

export const findAll = async (token) => {
  let result = await axios.get('/api/v1/location', {
    headers: {
      Authorization: 'Bearer ' + token
    },
    data: {}
  })
  .catch(error => {
    throw error
  })
  return result
}