import { useLoaderData, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Poxymon() {

  const allPoxymon = useLoaderData()

  // ! States
  const [filters, setFilters] = useState({
    type: 'All',
    search: ''
  })
  const [types, setTypes] = useState([])
  const [filteredPoxymon, setFilteredPoxymon] = useState([])

  // ! Function
  function handleChange(e) {
    const newObj = {
      ...filters,
      [e.target.name]: e.target.value
    }
    setFilters(newObj)
  }

  // ! Effects
  useEffect(() => {
    // Update display of shown characters by name according to keys typed by user AND any dropdown selected by their house
    const pattern = new RegExp(filters.search, 'i')
    const filteredArray = allPoxymon.filter(poxymon => {
      return pattern.test(poxymon.name) && (poxymon.type[0].name === filters.type || filters.type === 'All')
    })
    setFilteredPoxymon(filteredArray)
    // Update dropdown houses options by collating them from fetched data
    if (allPoxymon.length > 0 && types.length === 0) {
      const typesArr = [...new Set(allPoxymon.map(poxymon => poxymon.type[0].name))].filter(Boolean)
      setTypes(typesArr)
    }
  }, [filters])

  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4} lg={3}>
            <div className="custom-select">
              {/* Dropdown menu */}
              <select id="dropdown" name="type" value={filters.type[0].name} onChange={handleChange}>
                <option value="All">All</option>
                {types.length > 0 &&
                  types.map(type => {
                    return <option key={type} value={type}>{type}</option>
                  })
                }
              </select>
            </div>
          </Col>
          <Col xs={6} md={4} lg={3}>
            {/* Search bar */}
            <input id="search" name="search" placeholder='Search...' value={filters.search}
              onChange={handleChange} />
          </Col>
        </Row>
        <Row className='poxymon-list'>
          {/* Display filtered results on page */}
          {filteredPoxymon.length > 0 &&
            filteredPoxymon.map(poxymon => {
              // const { id, name, image } = poxymon
              return (
                <Col
                  className="poxymon-index"
                  as={Link}
                  key={poxymon.id}
                  xs={6}
                  md={4}
                  lg={3}
                  to={`/poxymon/${poxymon.id}`}
                >
                  <div className={poxymon.type[0].name} id="card" >
                    <div className="stats">
                      <div className="main-stats">SPE {poxymon.speed}</div>
                      <div className="type" id={poxymon.type[0].name}>{poxymon.type[0].name}</div>
                      <div className="main-stats">HP {poxymon.hp}</div>
                    </div>
                    <h3 className="poxymon-name">{poxymon.name}</h3>
                    <img src={poxymon.image} alt="poxymon-image" />
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
                </Col>
              )
            })}
        </Row>
      </Container>
    </>
  )
}