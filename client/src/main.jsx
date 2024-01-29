import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

// Page components
import App from './App'
import Home from './components/Home'
import Poxymon from './components/Poxymon'
import PoxymonSingle from './components/PoxymonSingle'
import PoxymonCreate from './components/PoxymonCreate'
import PoxymonUpdate from './components/PoxymonUpdate'
import ErrorPage from './components/ErrorPage'
import Profile from './components/Profile'

// Loaders
import { getAllPoxymon } from './utils/loaders/poxymon'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: getAllPoxymon
      },
      {
        path: '/poxymon',
        element: <Poxymon />,
        loader: getAllPoxymon
      },
      {
        path: '/poxymon/:poxymonId',
        element: <PoxymonSingle />
      },
      {
        path: '/poxymon/create',
        element: <PoxymonCreate />
      },
      {
        path: '/poxymon/:poxymonId/update',
        element: <PoxymonUpdate />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
