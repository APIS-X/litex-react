import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Dropdown, Avatar, Space } from 'antd';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';

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

const LayoutPage = ({ children }) => {
  const {
    token: { colorPrimary, colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  const styleHeader = {
    background: '#FFF',
  };

  return (
    <Layout className='layout-screen'>
      <Sider
        className='layout-sider'
        width={200}
        collapsedWidth={60}
        collapsible
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
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>LayoutPage</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LayoutPage;
