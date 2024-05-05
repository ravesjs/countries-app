import '@/styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CountryDetails from './components/CountryDetails/CountryDetails'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
  },
  {
    element: <CountryDetails />,
    path: '/country/:countryName',
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
// Remove "React.StrictMode" at prod and just leave "App" inside render
