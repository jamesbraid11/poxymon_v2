// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
// import Container from 'react-bootstrap/esm/Container'
// import ImageUploadField from './ImageUploadField.jsx'

export default function PoxymonCreate() {

  const types = useLoaderData()
  // const res = useActionData()
  // const navigate = useNavigate()
  // console.log(types)

  // const [ image, setImage ] = useState('')

  // useEffect(() => {
  //   if (res?.status === 201) {
  //     console.log('CREATED SUCCESSFULLY')
  //     navigate(`/poxymon/${res.data.id}`)
  //   }
  // }, [res, navigate])

  return (
    <>
      <h1>hello world</h1>
      {types.length > 0 && types.map(type => {
        return (
          <p key={type.id}>{type.name}</p>
        )
      })}
    </>
    // <>
    //   <h1 className="poxymon-create">Create a Poxymon!</h1>
    //   <Container className="create-container">
    //     <Form className="create-form" method="POST">
    //       <div className="create-stats">
    //         <label htmlFor="speed">Speed</label>
    //         <input type="number" name="speed"/>
    //         <div className="type" id={poxymon.type[0].name}>{poxymon.type[0].name}</div>
    //         <div className="main-stats">HP {poxymon.hp}</div>
    //       </div>
    //       <h3 className="poxymon-name">{poxymon.name}</h3>
    //       <img src={poxymon.image} alt="poxymon-image" />
    //       <div className="moves-container">
    //         <div className="move-names">
    //           <h5>&nbsp;&nbsp;&nbsp;&nbsp;Move</h5>
    //           <div className="moves">{poxymon.move_one_name}</div>
    //           <div className="moves">{poxymon.move_two_name}</div>
    //         </div>
    //         <div className="move-types">
    //           <h5>Type</h5>
    //           <div className="move-type" id={poxymon.move_one_type.name}>{poxymon.move_one_type.name}</div>
    //           <div className="move-type" id={poxymon.move_two_type.name}>{poxymon.move_two_type.name}</div>
    //         </div>
    //         <div className="move-power">
    //           <h5>Power</h5>
    //           <div className="moves">{poxymon.move_one_power}</div>
    //           <div className="moves">{poxymon.move_two_power}</div>
    //         </div>
    //       </div>
    //     </Form>
    //   </Container>
    // </>
  )
}