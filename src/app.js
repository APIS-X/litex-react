import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import Layout from './layout';
import { Router } from '@/routers';

import './styles/global.less';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <ConfigProvider>
      <Layout>
        <Router />
      </Layout>
    </ConfigProvider>
  </BrowserRouter>
);
