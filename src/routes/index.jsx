import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from '@/views/Home';
import Login from '@/views/Login'; 
import Panel from '@/views/Panel'; 
import Cardapio from '@/views/Cardapio'; 
import PageLayout from '@/components/layout/pageLayout';

const withLayout = (Component) => (
  <PageLayout>
    <Component />
  </PageLayout>
);



const router = createBrowserRouter([
  {
    path: '/',
    element: withLayout(Home),
  },
  {
    path: '/login',
    element: withLayout(Login),
  },
  {
    path: '/Panel',
    element: withLayout(Panel),
  },
  {
    path: '/Cardapio',
    element: withLayout(Cardapio),
  },
]);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
