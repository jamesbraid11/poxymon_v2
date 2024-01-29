
export async function getAllPoxymon() {
  const res = await fetch('/api/poxymon/')
  return res.json()
}

// export async function getSinglePoxymon(id){
//   const res = await fetch(`/api/poxymon/${id}/`)
//   return res.json()
// }