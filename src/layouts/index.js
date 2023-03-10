import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme, Dropdown, Avatar, Space } from 'antd';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';

import { userStore } from '@/stores';

import logo from '@/assets/logo.png';

const { Header, Content, Sider } = Layout;
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
      theme: 'light',
    };
  }
);

const items = [
  {
    key: 'logout',
    label: '退出',
  },
];

const styleHeader = {
  background: '#FFF',
};

const LayoutPage = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  const { userInfo, getUserInfo } = userStore();

  console.log('userInfo', userInfo);

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
      <Sider
        className='layout-sider'
        collapsible
        width={200}
        collapsedWidth={60}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={collapsed ? 'logo collapsed' : 'logo'}>
          <img src={logo} alt='' />
          <span className='title'>{collapsed ? '' : '工具平台'}</span>
        </div>
        <Menu
          mode='inline'
          theme='dark'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          items={items2}
        />
      </Sider>
      <Layout className='layout-right'>
        <Header className='layout-header' style={styleHeader}>
          <Dropdown menu={{ items }}>
            <Space>
              <Avatar icon={<UserOutlined />} />
              超级管理员
              <DownOutlined />
            </Space>
          </Dropdown>
        </Header>
        <Layout className='layout-content'>
          <Breadcrumb />
          <Content style={styleContent}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LayoutPage;
