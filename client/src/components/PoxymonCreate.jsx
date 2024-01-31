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
      navigate(`/poxymon/${res.data.id}/`)
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
          </div>
          <div className="description-container">
            <label htmlFor="description">Description</label>
            <textarea name="description"></textarea>
          </div>
          <div className="create-stats-container">
            <div className="create-stats">
              <label htmlFor="type">Type</label>
              <select className="stat-input" name="type">
                {types.map(type => {
                  return <option key={type.id} value={type.id}>{type.name}</option>
                })}
              </select>
            </div>
            <div className="create-stats">
              <label htmlFor="speed">Speed (min 100)</label>
              <input className="stat-input" type="number" name="speed" />
            </div>
            <div className="create-stats">
              <label htmlFor="hp">HP (min 100)</label>
              <input className="stat-input" type="number" name="hp" />
            </div>
          </div>
          <div className="create-move">
            <div className="create-stats-name">
              <label htmlFor="move_one_name">Move Name</label>
              <input className="move-name-input" type="text" name="move_one_name" />
            </div>
            <div className="create-stats">
              <label htmlFor="move_one_power">Power (max 100)</label>
              <input className="stat-input" type="number" name="move_one_power" />
            </div>
            <div className="create-stats">
              <label htmlFor="move_one_type">Type</label>
              <select className="stat-input" name="move_one_type">
                {types.map(type => {
                  return <option key={type.id} value={type.id}>{type.name}</option>
                })}
              </select>
            </div>
          </div>
          <div className="create-move">
            <div className="create-stats-name">
              <label htmlFor="move_two_name">Move Name</label>
              <input className="move-name-input" type="text" name="move_two_name" />
            </div>
            <div className="create-stats">
              <label htmlFor="move_two_power">Power (max 100)</label>
              <input className="stat-input" type="number" name="move_two_power" />
            </div>
            <div className="create-stats">
              <label htmlFor="move_two_type">Type</label>
              <select className="stat-input" name="move_two_type">
                {types.map(type => {
                  return <option key={type.id} value={type.id}>{type.name}</option>
                })}
              </select>
            </div>
          </div>
          <button className="button" id="create-submit-btn" type="submit">Create Poxymon</button>
          {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        </Form>
      </Container >
    </>
  )
}