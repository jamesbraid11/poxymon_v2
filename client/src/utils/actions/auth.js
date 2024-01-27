import axios from 'axios'

// Action to post register data to database
export async function registerUser(data) {
  // Post object data to database
  return await axios.post('/api/auth/register/', data, {
    // Make sure error not thrown on screen
    validateStatus: () => true
  })
}

// Action to post login data to database
export async function loginUser(data) {
  return await axios.post('/api/auth/login/', data, {
    validateStatus: () => true
  })
}