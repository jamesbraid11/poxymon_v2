import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'

export async function createPoxymon(request) {
  const data = await formToObj(request)
  setTimeout(console.log(data), 5000)
  return await axios.post('/api/poxymon/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}