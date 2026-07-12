import { createBrowserRouter } from "react-router";
import App from "./App";
import Categories from "./pages/Categories";
import Recipies from "./pages/Recipies";
import { Home } from "./pages/Home";
import NotFound from "./components/NotFound";
import RecipiesDetail from "./pages/RecipiesDetail";
import CategoryReceps from "./pages/CategoryRecep";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipies",
        element: <Recipies />,
      },
       {
        path: '/recipies/:id',
        element: <RecipiesDetail/>,
      },
      {
        path: 'categories',
        element: <Categories />,
        children: [
          {
            path: ':categoryId',
            element: <CategoryReceps />,
          },
        ],
      },
    ],
}
    
]);

export default router;
