import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

import { routerList, routerMaps } from '@/routers';
import { globalStore } from '@/stores';

import Siderbar from './Siderbar';
import Header from './Header';

const { Content } = Layout;

const LayoutPage = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { getUserInfo } = globalStore();

  useEffect(() => {
    getUserInfo();
  }, []);

  const styleContent = {
    padding: 24,
    margin: 0,
    background: colorBgContainer,
  };

  return (
    <Layout className='layout-screen'>
      <Siderbar />
      <Layout className='layout-right'>
        <Header />
        <Layout className='layout-content'>
          <Breadcrumb />
          <Content style={styleContent}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LayoutPage;
