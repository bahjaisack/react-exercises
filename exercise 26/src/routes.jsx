import App from "./App";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement: <NotFound/>,
        children: [
           {
        index: true,
        element: <Home />,
      },
        {
        path: 'posts/:postId',
        element: <PostDetail />,
      },
        {
        path: 'create',
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
        ]
    }
])