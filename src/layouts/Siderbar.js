import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

import { routerList, routerMaps } from '@/routers';
import { STORAGE_TOKEN } from '@/constants';

import logo from '@/assets/logo.jpeg';

const { Sider } = Layout;
const { collapsedKey } = STORAGE_TOKEN;

const Siderbar = () => {
  const defaultCollapsed = +localStorage.getItem(collapsedKey);

  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    setMenuSelect();
  }, [routerList, collapsed]);

  const setMenuSelect = () => {
    const path = location.pathname;
    const { keys } = routerMaps[path];
    const selectedKeys = [...(keys || [])].pop();

    setSelectedKeys(selectedKeys);
    setOpenKeys(collapsed ? [] : keys);
  };

  const changeMenuClick = ({ key, keyPath, domEvent }) => {
    const { path } = routerMaps[key];
    setSelectedKeys([key]);
    navigate(path);
  };
  const changeMenuOpen = (openKeys) => {
    setOpenKeys([openKeys.pop()]);
  };

  const onCollapse = () => {
    localStorage.setItem(collapsedKey, collapsed ? 0 : 1);
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      className='layout-sider'
      collapsible
      width={200}
      collapsedWidth={60}
      collapsed={collapsed}
      onCollapse={(value) => onCollapse(value)}
    >
      <div className={collapsed ? 'logo collapsed' : 'logo'}>
        <img src={logo} alt='' />
        <span className='title'>{collapsed ? '' : '工具平台'}</span>
      </div>
      <Menu
        mode='inline'
        theme='dark'
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        items={routerList}
        onClick={changeMenuClick}
        onOpenChange={changeMenuOpen}
      />
    </Sider>
  );
};

export default Siderbar;
