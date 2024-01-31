const tokenName = 'POXYMON-TOKEN'

// This function takes a request object and returns form data as a JS object
export async function formToObj(request){
  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}

export function setToken(token){
  localStorage.setItem(tokenName, token)
}

export function getToken(){
  return localStorage.getItem(tokenName)
}

export function removeToken(){
  localStorage.removeItem(tokenName)
}

// This function decodes the JWT in localstorage
export function activeUser() {
  // Get token from localstorage
  const token = getToken()
  // If the token does not exist, will return null
  if (token === 'undefined') return null
  // If the token exists, decode, validate expiry date, return the payload.sub
  const b64 = token.split('.')[1]
  const payload = JSON.parse(atob(b64))
  // Validate expiry date (payload.exp) by checking the number is greater than the date right now
  const now = Date.now() / 1000
  const exp = payload.exp
  if (exp > now) {
    return payload.user_id
  }
}