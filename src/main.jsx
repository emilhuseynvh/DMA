import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './router/route.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} />
)
