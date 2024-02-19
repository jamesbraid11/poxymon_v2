import { useState } from 'react'
import { Link } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal'
import { FaRegUserCircle } from "react-icons/fa"
import { IoMenu } from "react-icons/io5";

import { setToken } from '../utils/helpers/common'
import { registerUser, loginUser } from '../utils/actions/auth'

export default function Nav() {

  const toggleModal = () => {
    // Toggle the state to show/hide the login and register modals
    setLoginModalShow((prevShow) => !prevShow)
  }

  const [show, setShow] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [loginModalShow, setLoginModalShow] = useState(false)

  const [registerData, setRegisterData] = useState(
    {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    })

  const [loginData, setLoginData] = useState(
    {
      username: '',
      password: ''
    })

  function handleChange(e) {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  function handleLoginChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  async function submitRegistration(e) {
    e.preventDefault()
    const res = await registerUser(registerData)
    console.log(res)
    if (res.status === 201) {
      console.log('REGISTRATION SUCCESSFUL')
      setModalShow(false)
      setLoginModalShow(true)
    }
  }

  async function submitLogin(e) {
    e.preventDefault()
    const res = await loginUser(loginData)
    if (res.status === 200) {
      console.log('LOGIN SUCCESSFUL')
      setLoginModalShow(false)
      setToken(res.data.access)
    }
  }

  return (
    <>
      <div className='navbar'>
        <div className="header-title"><Link to='/'></Link></div>
        <div className="header-menu">
            <FaRegUserCircle fill="#80ff00" className="user-icon login-icon" onClick={toggleModal}/>
            <IoMenu className='nav-toggle user-icon menu-icon' onClick={() => setShow(true)} />
        </div>

        <Modal show={show} fullscreen={false} onHide={() => setShow(false)} className='index'>
          <Modal.Header closeButton>
          </Modal.Header>
          <nav className="main-menu" onClick={() => setShow(false)}>
            <ul className='burger-menu nav nav-underline'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>Home</Link>&nbsp;
              </li>
              <li className='nav-item'>
                <Link to='/poxymon' className='nav-link'>Poxymon</Link>&nbsp;
              </li>
              <li className='nav-item'>
                <Link to='/poxymon/create' className='nav-link'>Create</Link>&nbsp;
              </li>
              <li className='nav-item'>
                <Link to='/battle' className='nav-link'>Battle</Link>&nbsp;
              </li>
              <li className='nav-item'>
                <Link to='/profile' className='nav-link'>Profile</Link>&nbsp;
              </li>
            </ul>
          </nav>
        </Modal>

        <Modal centered show={modalShow} onHide={() => setModalShow(false)} className='centered-modal'>
          <Modal.Body className='login-modal-body'>
            <form className='create'>
              <h1 className='modal-title'>Register</h1>
              <input type='text' name='username' placeholder='Username...' onChange={handleChange} />
              <input type='email' name='email' placeholder='Email...' onChange={handleChange} />
              <input type='password' name='password' placeholder='Password...' onChange={handleChange} />
              <input type='password' name='password_confirmation' placeholder='Confirm Password...' onChange={handleChange} />
              <button className='button' id='login-button' type='submit' onClick={submitRegistration}>Register</button>
              {/* Below will return a message to user if username taken, etc. Need to set this up. */}
              {/* {res && <p className='danger'>{res.data.message}</p>} */}
              <p className='account'>
                Already have an account?  &nbsp;
                <span type="button" className="login-switch" onClick={() => {
                  setModalShow(false) // Close signup modal if open
                  setLoginModalShow(true) // Open login modal
                }}>
                  Login
                </span>
              </p>
            </form>
          </Modal.Body>
        </Modal>

        <Modal centered show={loginModalShow} onHide={() => setLoginModalShow(false)} className='centered-modal'>
          <Modal.Body className='login-modal-body'>
            <form className='login'>
              <h2 className='modal-title'>Login</h2>
              <input type='text' name='username' placeholder='Username...' onChange={handleLoginChange} />
              <input type='password' name='password' placeholder='Password...' onChange={handleLoginChange} />
              <button className='button' id="login-button" type='submit' onClick={submitLogin}>Login</button>
              {/* Add message on server side to inform  visitor to login if haven't or other errors?*/}
              {/* {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>} */}
              <p className='account'>
                No account yet?   &nbsp;
                <span type="button" className="login-switch" onClick={() => {
                  setModalShow(true)
                  setLoginModalShow(false)
                }}>
                  Register
                </span>
              </p>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}