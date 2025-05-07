import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AllProjects from './sections/AllProjects'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/projects',
        element: <AllProjects />
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
