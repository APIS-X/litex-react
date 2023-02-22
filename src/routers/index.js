import React from 'react';
import { useRoutes } from 'react-router-dom';

import PageHome from '@/pages/Home';
import PageUser from '@/pages/User';
import PageClass from '@/pages/PageClass';

// 路由配置List
const routers = [
  {
    path: '/',
    element: <PageHome />,
  },
  {
    path: '/user',
    element: <PageUser />,
  },
  {
    path: '/pageClass',
    element: <PageClass />,
  },
  {
    path: '*',
    element: <>404 Not Found!</>,
  },
];

const Router = () => {
  return useRoutes(routers);
};

export { routers, Router };
