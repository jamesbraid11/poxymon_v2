// import { useEffect, useState } from 'react'
import { useLoaderData, Form } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
// import ImageUploadField from './ImageUploadField.jsx'

export default function PoxymonCreate() {

  const types = useLoaderData()
  // const res = useActionData()
  // const navigate = useNavigate()
  console.log(types)

  // const [ image, setImage ] = useState('')

  // useEffect(() => {
  //   if (res?.status === 201) {
  //     console.log('CREATED SUCCESSFULLY')
  //     navigate(`/poxymon/${res.data.id}`)
  //   }
  // }, [res, navigate])

  return (
    <>
      <h1 className="poxymon-create">Create a Poxymon!</h1>
      <Container className="create-container">
        <Form className="create-form" method="POST">
          <div className="create-stats">
            <label htmlFor="speed">Speed (min 100)</label>
            <input type="number" name="speed"/>
            <label htmlFor="type">Type</label>
            <select name="type" id={types.id}>
              {types.map(type => {
                return <option key={type.id} value={type.id}>{type.name}</option>
              })}
            </select>
            <label htmlFor="hp">HP (min 100)</label>
            <input type="number" name="hp"/>
          </div>
        </Form>
      </Container>
    </>
  )
}