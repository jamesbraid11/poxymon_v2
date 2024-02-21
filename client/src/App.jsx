import { Outlet, useNavigation } from 'react-router-dom'

// Custom components
import Nav from './components/Nav'
import Footer from './components/Footer'

import Loading from './images/monsters.gif'

function App() {
  const navigation = useNavigation()
  return (
    <>
      <Nav />
      <main>
        {
          navigation.state === 'idle' ?
            <Outlet />
            :
            <div className='centred'>
              <img src={Loading} alt="monster loading gif" style={{ width: '20rem' }}/>
            </div>
        }
      </main>
      <Footer />
    </>
  )
}

export default App
