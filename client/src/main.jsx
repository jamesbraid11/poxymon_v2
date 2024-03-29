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
import Battle from './components/Battle'

// Loaders
import { getAllPoxymon, getSinglePoxymon, getAllTypes } from './utils/loaders/poxymon'

// Actions
import { createPoxymon, updateOrDeletePoxymon } from './utils/actions/poxymon'

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
        path: '/poxymon/:pk',
        element: <PoxymonSingle />,
        loader: async ({ params }) => getSinglePoxymon(params.pk)
      },
      {
        path: '/poxymon/create',
        element: <PoxymonCreate />,
        loader: getAllTypes,
        action: async ({ request }) => createPoxymon(request)
      },
      {
        path: '/poxymon/:pk/update',
        element: <PoxymonUpdate />,
        loader: async ({ params }) => getSinglePoxymon(params.pk),
        action: async ({ request, params }) => updateOrDeletePoxymon(request, params.pk)
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/battle',
        element: <Battle />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
