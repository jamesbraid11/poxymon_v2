import { useState, useEffect } from 'react'
import { useLoaderData, Form, useActionData, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import ImageUploadField from './ImageUploadField.jsx'

export default function PoxymonCreate() {

  const types = useLoaderData()
  const res = useActionData()
  const navigate = useNavigate()
  console.log(types)

  const [image, setImage] = useState('')

  useEffect(() => {
    if (res?.status === 201) {
      console.log('CREATED SUCCESSFULLY')
      console.log(res)
      navigate(`/poxymon/${res.data.id}`)
    }
  }, [res, navigate])

  return (
    <>
      <h1 className="poxymon-create">Create a Poxymon!</h1>
      <Container className="create-container">
        <Form className="create-form" method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <div className="create-image">
            <ImageUploadField image={image} setImage={setImage} />
            <label htmlFor="description">Description</label>
            <textarea name="description"></textarea>
          </div>
          <div className="create-stats">
            <label htmlFor="speed">Speed (min 100)</label>
            <input type="number" name="speed" />
            <label htmlFor="type">Type</label>
            <select name="type">
              {types.map(type => {
                return <option key={type.id} value={type.id}>{type.name}</option>
              })}
            </select>
            <label htmlFor="hp">HP (min 100)</label>
            <input type="number" name="hp" />
          </div>
          <div className="create-moves">
            <div className="create-move-one">
              <label htmlFor="move_one_name">Move Name</label>
              <input type="text" name="move_one_name" />
              <label htmlFor="move_one_power">Power (max 100)</label>
              <input type="number" name="move_one_power" />
              <label htmlFor="move_one_type">Type</label>
              <select name="move_one_type">
                {types.map(type => {
                  return <option key={type.id} value={type.id}>{type.name}</option>
                })}
              </select>
            </div>
            <div className="create-move-two">
            <label htmlFor="move_two_name">Move Name</label>
              <input type="text" name="move_two_name" />
              <label htmlFor="move_two_power">Power (max 100)</label>
              <input type="number" name="move_two_power" />
              <label htmlFor="move_two_type">Type</label>
              <select name="move_two_type">
                {types.map(type => {
                  return <option key={type.id} value={type.id}>{type.name}</option>
                })}
              </select>
            </div>
          </div>
          <button className="button" type="submit">Create poxymon</button>
          {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        </Form>
      </Container>
    </>
  )
}