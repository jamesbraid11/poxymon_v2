import { useLoaderData, Link } from "react-router-dom"
import { activeUser } from '../utils/helpers/common'

export default function PoxymonSingle() {

  const poxymon = useLoaderData()
  console.log(poxymon)

  return (
    <>
      <section className="single-section">
        <div className="single-title">
          <h1 className="single-title">{poxymon.name}</h1>
        </div>
        <div className="single-container">
          <div className="single-image-container">
            <img className="single-image" src={poxymon.image} alt="poxymon-image" />
            <div className="btn-container">
              <Link to={'/poxymon'} className="button back-btn">Back</Link>
              {activeUser() === poxymon.creator.id &&
                <Link to={`/poxymon/${poxymon.id}/update`} className="button">Update/Delete</Link>
              }
            </div>
          </div>
          <div className="single-info-container">
            <p className="creator">Creator: {poxymon.creator.username}</p>
            <div className="single-description">
              <p className="description">{poxymon.description}</p>
            </div>
            <div className={poxymon.type.name} id="stats-and-moves">
              <div className="single-stats-container">
                <div className="single-stats">Speed<br></br><span className="stats moves">{poxymon.speed}</span></div>
                <div className="single-stats">HP<br></br><span className="stats moves">{poxymon.hp}</span></div>
              </div>
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
            </div>
            <div className="type-and-weaknesses">
              <div className="single-type">
                <p className="type-text">Type:</p>
                <div className="move-type" id={poxymon.type.name}>{poxymon.type.name}</div>
              </div>
              <div className="weaknesses">
                <p className="type-text">Weaknesses:</p>
                {/* <div className="move-type" id={poxymon.type[0].name}>{poxymon.type[0].name}</div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="review"></div>
      </section>
    </>
  )
}