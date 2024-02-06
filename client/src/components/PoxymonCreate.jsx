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

  const [pointsRemaining, setPointsRemaining] = useState(500)

  const [speed, setSpeed] = useState(100)
  const [hp, setHp] = useState(100)
  const [moveOnePower, setMoveOnePower] = useState(0)
  const [moveTwoPower, setMoveTwoPower] = useState(0)
  
  const handleSpeed = function (e) {
    setSpeed(e.target.value)
  }
  const handleHp = function (e) {
    setHp(e.target.value)
  }
  const handleMoveOnePower = function (e) {
    setMoveOnePower(e.target.value)
  }
  const handleMoveTwoPower = function (e) {
    setMoveTwoPower(e.target.value)
  }

  useEffect(() => {
    // console.log(
    //   `SPEED -> ${speed},
    //   HP -> ${hp},
    //   M1POWER -> ${moveOnePower},
    //   M2POWER -> ${moveTwoPower},
    //   PREMAINING -> ${pointsRemaining}`
    // )
    setPointsRemaining(500 - Number(speed) - Number(hp) - Number(moveOnePower) - Number(moveTwoPower))
  }, [speed, hp, moveOnePower, moveTwoPower])

  useEffect(() => {
    console.log(res)
    if (res?.status === 201) {
      console.log('CREATED SUCCESSFULLY')
      navigate(`/poxymon/${res.data.id}/`)
    }
  }, [res, navigate])

  return (
    <>
      <h1 className="poxymon-create">Create a Poxymon!</h1>
      <Container className="create-container">
        <Form onSubmit={e => e.preventDefault()} className="create-form" method="POST">
          <label htmlFor="name">Name</label>
          <input className="create-input" type="text" name="name" />
          <div className="create-image">
            <ImageUploadField image={image} setImage={setImage} />
          </div>
          <div className="description-container">
            <label htmlFor="description">Description</label>
            <textarea name="description"></textarea>
          </div>
          <p className='points-description'>Speed + HP + Move One Power + Move Two Power = Max 500</p>
          <label htmlFor="points-remaining">Points Remaining</label>
          <div className="points-remaining">
            <p className='points-remaining-value'>{pointsRemaining}</p>
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
              <input className="stat-input create-input" type="number" name="speed" defaultValue="100" min="100" onChange={handleSpeed} />
            </div>
            <div className="create-stats">
              <label htmlFor="hp">HP (min 100)</label>
              <input className="stat-input create-input" type="number" name="hp" defaultValue="100" min="100" onChange={handleHp} />
            </div>
          </div>
          <div className="create-move">
            <div className="create-stats-name">
              <label htmlFor="move_one_name">Move One Name</label>
              <input className="move-name-input create-input" type="text" name="move_one_name" />
            </div>
            <div className="create-stats">
              <label htmlFor="move_one_type">Type</label>
              <select className="stat-input create-input" name="move_one_type">
                {types.map(type => {
                  return <option key={type.id} value={type.id}>{type.name}</option>
                })}
              </select>
            </div>
            <div className="create-stats">
              <label htmlFor="move_one_power">Power (max 100)</label>
              <input className="stat-input create-input" type="number" name="move_one_power" defaultValue="0" max="100" onChange={handleMoveOnePower} />
            </div>
          </div>
          <div className="create-move">
            <div className="create-stats-name">
              <label htmlFor="move_two_name">Move Two Name</label>
              <input className="move-name-input create-input" type="text" name="move_two_name" />
            </div>
            <div className="create-stats">
              <label htmlFor="move_two_type">Type</label>
              <select className="stat-input create-input" name="move_two_type">
                {types.map(type => {
                  return <option key={type.id} value={type.id}>{type.name}</option>
                })}
              </select>
            </div>
            <div className="create-stats">
              <label htmlFor="move_two_power">Power (max 100)</label>
              <input className="stat-input create-input" type="number" name="move_two_power" defaultValue="0" max="100" onChange={handleMoveTwoPower} />
            </div>
          </div>
          {pointsRemaining >= 0 && <button className="button" id="create-submit-btn" type="submit">Create Poxymon</button>}
          {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        </Form>
      </Container >
    </>
  )
}