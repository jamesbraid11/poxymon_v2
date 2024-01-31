import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'
import { redirect } from 'react-router-dom'

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

export async function updateOrDeletePoxymon(request, id) {

  const data = await formToObj(request)

  if (data.intent === 'update') {
    return await axios.patch(`/api/poxymon/${id}/`, data, {
      validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }
  if (data.intent === 'delete') {
    await axios.delete(`/api/poxymon/${id}/`, {
      validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
    return redirect('/poxymon/')
  }
}