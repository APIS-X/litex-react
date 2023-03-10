import React from 'react';
import { useRoutes } from 'react-router-dom';

import PageHome from '@/pages/Home';
import List1 from '@/pages/list/List1';
import List2 from '@/pages/list/List2';
import List3 from '@/pages/list/List3';
import PageUser from '@/pages/User';

// 路由配置List
const routers = [
  {
    path: '/home',
    element: <PageHome />,
  },
  {
    path: '/list',
    children: [
      {
        path: '/list/1',
        element: <List1 />,
      },
      {
        path: '/list/2',
        element: <List2 />,
      },
      {
        path: '/list/3',
        element: <List3 />,
      },
    ],
  },
  {
    path: '/admin',
    element: <List1 />,
    children: [
      {
        path: '/admin/sub-page1',
        element: <List1 />,
      },
      {
        path: '/admin/sub-page2',
        element: <List2 />,
      },
      {
        path: '/admin/sub-page3',
        element: <List3 />,
      },
    ],
  },
  {
    path: '/user',
    element: <PageUser />,
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
