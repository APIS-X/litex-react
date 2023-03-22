import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

import { globalStore } from '@/stores';
import { routerMaps } from '@/routers';
import Siderbar from './Siderbar';
import Header from './Header';

const { Content } = Layout;

const LayoutPage = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { getUserInfo } = globalStore();

  const { pathname } = useLocation();

  useEffect(() => {
    getUserInfo();
  }, []);

  const styleContent = {
    padding: 24,
    margin: 0,
    background: colorBgContainer,
  };

  const currentRoute = routerMaps[pathname] || {};

  const items = currentRoute.keys?.map((k) => {
    return {
      key: k,
      title: routerMaps[k]?.label,
    };
  });

  return (
    <Layout className='layout-screen'>
      <Siderbar />
      <Layout className='layout-right'>
        <Header />
        <Layout className='layout-content'>
          {!currentRoute.extra?.hideBreadcrumb && <Breadcrumb items={items} />}
          <Content style={styleContent}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LayoutPage;
