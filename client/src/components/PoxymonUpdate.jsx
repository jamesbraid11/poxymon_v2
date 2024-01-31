import { useState, useEffect } from 'react'
import { useLoaderData, Form, useActionData, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import ImageUploadField from './ImageUploadField.jsx'

export default function PoxymonCreate() {

  const poxymon = useLoaderData()
  const res = useActionData()
  const navigate = useNavigate()
  console.log(poxymon)

  const [image, setImage] = useState(poxymon.image)

  const types = [
    {
      id: 1,
      name: "Fire"
    },
    {
      id: 2,
      name: "Water"
    },
    {
      id: 3,
      name: "Grass"
    },
    {
      id: 4,
      name: "Normal"
    },
    {
      id: 5,
      name: "Flying"
    },
    {
      id: 6,
      name: "Fighting"
    },
    {
      id: 7,
      name: "Poison"
    },
    {
      id: 8,
      name: "Electric"
    },
    {
      id: 9,
      name: "Ground"
    },
    {
      id: 10,
      name: "Rock"
    },
    {
      id: 11,
      name: "Psychic"
    },
    {
      id: 12,
      name: "Ice"
    },
    {
      id: 13,
      name: "Bug"
    },
    {
      id: 14,
      name: "Ghost"
    },
    {
      id: 15,
      name: "Steel"
    },
    {
      id: 16,
      name: "Dragon"
    },
    {
      id: 17,
      name: "Dark"
    },
    {
      id: 18,
      name: "Fairy"
    }
  ]

  useEffect(() => {
    console.log(res)
    if (res?.status === 200) {
      console.log('UPDATED SUCCESSFULLY')
      navigate(`/poxymon/${res.data.id}/`)
    }
  }, [res, navigate])

  return (
    <>
      <h1 className="poxymon-create">Update Poxymon</h1>
      <Container className="create-container">
        <Form className="create-form" method="POST">
          <label htmlFor="name">Name</label>
          <input className="create-input" type="text" name="name" defaultValue={poxymon.name} />
          <div className="create-image">
            <ImageUploadField image={image} setImage={setImage} />
          </div>
          <div className="description-container">
            <label htmlFor="description">Description</label>
            <textarea name="description" defaultValue={poxymon.description}></textarea>
          </div>
          <div className="create-stats-container">
            <div className="create-stats">
              <label htmlFor="type">Type</label>
              <select className="stat-input create-input" name="type" defaultValue={poxymon.type.id}>
                {types.map(type => {
                  return <option key={type.id} value={type.id}>{type.name}</option>
                })}
              </select>
            </div>
            <div className="create-stats">
              <label htmlFor="speed">Speed (min 100)</label>
              <input className="stat-input create-input" type="number" name="speed" defaultValue={poxymon.speed} />
            </div>
            <div className="create-stats">
              <label htmlFor="hp">HP (min 100)</label>
              <input className="stat-input create-input" type="number" name="hp" defaultValue={poxymon.hp} />
            </div>
          </div>
          <div className="create-move">
            <div className="create-stats-name">
              <label htmlFor="move_one_name">Move Name</label>
              <input className="move-name-input create-input" type="text" name="move_one_name" defaultValue={poxymon.move_one_name} />
            </div>
            <div className="create-stats">
              <label htmlFor="move_one_power">Power (max 100)</label>
              <input className="stat-input create-input" type="number" name="move_one_power" defaultValue={poxymon.move_one_power} />
            </div>
            <div className="create-stats">
              <label htmlFor="move_one_type">Type</label>
              <select className="stat-input create-input" name="move_one_type" defaultValue={poxymon.move_one_type.id}>
                {types.map(type => {
                  return <option key={type.id} value={type.id}>{type.name}</option>
                })}
              </select>
            </div>
          </div>
          <div className="create-move">
            <div className="create-stats-name">
              <label htmlFor="move_two_name">Move Name</label>
              <input className="move-name-input create-input" type="text" name="move_two_name" defaultValue={poxymon.move_two_name} />
            </div>
            <div className="create-stats">
              <label htmlFor="move_two_power">Power (max 100)</label>
              <input className="stat-input create-input" type="number" name="move_two_power" defaultValue={poxymon.move_two_power} />
            </div>
            <div className="create-stats">
              <label htmlFor="move_two_type">Type</label>
              <select className="stat-input create-input" name="move_two_type" defaultValue={poxymon.move_two_type.id}>
                {types.map(type => {
                  return <option key={type.id} value={type.id}>{type.name}</option>
                })}
              </select>
            </div>
          </div>
          <div className="buttons">
            <button className="button" id="create-submit-btn" type="submit" name="intent" value="update">Update Poxymon</button>
            <button className="button" id="create-submit-btn" type="submit" name="intent" value="delete">Delete Poxymon</button>
          </div>
          {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        </Form>
      </Container >
    </>
  )
}