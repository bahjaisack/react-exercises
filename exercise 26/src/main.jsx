import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './AuthContext.jsx'
import { RouterProvider } from 'react-router'
import { router } from './routes.jsx'
import { PostsProvider } from './pages/Posts.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <PostsProvider>
        <RouterProvider router={router} />
      </PostsProvider>
    </AuthProvider>
  </StrictMode>,
)
