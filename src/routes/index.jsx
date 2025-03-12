import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from '@/views/Home';
import Login from '@/views/Login'; 
import Panel from '@/views/Panel'; 
import Cardapio from '@/views/Cardapio'; 

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
  {
    path: '/Cardapio',
    element: <Cardapio />,
  },
]);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
