import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import Layout from './layouts';
import { Router } from '@/routers';
import { themes } from '@configs';

import './styles/global.less';

const theme = {
  token: {
    ...themes,
  },
};

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <ConfigProvider theme={theme}>
      <Layout>
        <Router />
      </Layout>
    </ConfigProvider>
  </BrowserRouter>
);
