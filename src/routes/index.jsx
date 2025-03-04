import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login'; // Importa a nova página de Login
import Panel from '../views/Panel'; // Importa a nova página de Login

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/Panel',
    element: <Panel />,
  },
]);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
