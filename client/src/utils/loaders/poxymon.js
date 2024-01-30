
export async function getAllPoxymon() {
  const res = await fetch('/api/poxymon/')
  return res.json()
}

export async function getSinglePoxymon(pk){
  const res = await fetch(`/api/poxymon/${pk}/`)
  return res.json()
}

export async function getAllTypes() {
  const res = await fetch('/types/')
  console.log(res)
  return res.json()
}