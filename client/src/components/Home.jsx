import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Home() {

  const allPoxymon = useLoaderData()

  const [poxymon, setPoxymon] = useState(allPoxymon[0])

  // console.log(allPoxymon)
  // console.log(poxymon)

  useEffect(() => {
    const i = Math.floor(Math.random() * allPoxymon.length)
    setPoxymon(allPoxymon[i])
  }, [allPoxymon])

  function randomId() {
    const i = Math.floor(Math.random() * allPoxymon.length)
    setPoxymon(allPoxymon[i])
  }

  return (
    <section className="hero">
      <div className="title-section">
        <div className="title"></div>
        <p className="about">Welcome to the truly unremarkable world of Poxymon. <br></br>Create and battle poxymon on your way to becoming a <br />Poxymon Master!</p>
      </div>
      <div className="card-container">
        <button id="btn-generate" onClick={randomId}>Discover Poxymon!</button>
        <div className={poxymon.type.name} id="card"><Link to={`/poxymon/${poxymon.id}`}>
          <div className="stats">
            <div className="main-stats">SPE {poxymon.speed}</div>
            <div className="type" id={poxymon.type.name}>{poxymon.type.name}</div>
            <div className="main-stats">HP {poxymon.hp}</div>
          </div>
          <h3 className="poxymon-name">{poxymon.name}</h3>
          <div className="card-image" style={{backgroundImage: `url(${poxymon.image})`}}></div>
          <div className="moves-container">
            <div className="move-names">
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;Move</h5>
              <div className="moves">{poxymon.move_one_name}</div>
              <div className="moves">{poxymon.move_two_name}</div>
            </div>
            <div className="move-types">
              <h5>Type</h5>
              <div className="move-type" id={poxymon.move_one_type.name}>{poxymon.move_one_type.name}</div>
              <div className="move-type" id={poxymon.move_two_type.name}>{poxymon.move_two_type.name}</div>
            </div>
            <div className="move-power">
              <h5>Power</h5>
              <div className="moves">{poxymon.move_one_power}</div>
              <div className="moves">{poxymon.move_two_power}</div>
            </div>
          </div>
          </Link></div>
      </div>
    </section>
  )
}