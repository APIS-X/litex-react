import React, { useState, useEffect } from 'react';
import { Layout, Menu, theme, Dropdown, Avatar, Space } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

import { globalStore } from '@/stores';

const LayoutHeader = Layout.Header;

const items = [
  {
    key: 'logout',
    label: '退出',
  },
];

const styleHeader = {
  background: '#FFF',
};

const Header = () => {
  const { userInfo } = globalStore();

  return (
    <LayoutHeader className='layout-header' style={styleHeader}>
      <Dropdown menu={{ items }}>
        <Space>
          <Avatar icon={<UserOutlined />} />
          {userInfo.userName}
          <DownOutlined />
        </Space>
      </Dropdown>
    </LayoutHeader>
  );
};
export default Header;
