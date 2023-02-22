import React from 'react';

import PageHome from '@/pages/Home';
import PageUser from '@/pages/User';
import PageClass from '@/pages/PageClass';

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
export { routers };
