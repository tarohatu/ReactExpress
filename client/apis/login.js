import axios from 'axios';

export const login = async (id, password) => {
  let result = await axios.post('/login', {
    user_name: id,
    password: password
  })
  .catch(error => {
    throw error
  })
  return result
}