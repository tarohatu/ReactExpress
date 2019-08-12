import axios from 'axios';

export const findAll = async () => {
  let result = await axios.get('/api/v1/location')
  .catch(error => {
    throw error
  })
  return result
}