import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from '../views/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
