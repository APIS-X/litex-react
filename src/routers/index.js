/**
 * 路由配置
 */

import React from 'react';
import { useRoutes } from 'react-router-dom';
import {
  HomeOutlined,
  UnorderedListOutlined,
  FileTextOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import PageHome from '@/pages/Home';
import ListTable from '@/pages/list/ListTable';
import FormPage from '@/pages/form/FormPage';

/**
 * 获取路由map
 * @param {*} menus
 * @param {*} maps
 * @returns
 */
const getRouteMaps = ({ parents = {}, items = [], maps = {} }) => {
  items.forEach((k) => {
    k.keys = [...(parents.keys || []), k.key];
    maps[k.key] = k;
    maps[k.path] = k;
    if (k.children) {
      maps = getRouteMaps({ parents: k, items: k.children, maps });
    }
  });

  return maps;
};

/**
 * 路由配置List
 * 
数据模型：
{
  key: 路由唯一KEY,
  label: 菜单标题,
  icon: 菜单icon,
  path: 菜单路径,
  element: 菜单页面组件,
  extra: { 
    hideBreadcrumb: 扩展字段 - 是否显示面包屑 ,
  }
}
 */
const routerList = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <HomeOutlined />,
    path: '/',
    element: <PageHome />,
    extra: {
      hideBreadcrumb: true,
    },
  },
  {
    key: 'list',
    label: '列表页',
    icon: <UnorderedListOutlined />,
    path: '/list',
    children: [
      {
        key: 'list-table',
        label: '表格',
        path: '/list/table',
        element: <ListTable />,
      },
    ],
  },
  {
    key: 'form',
    label: '表单',
    icon: <FileTextOutlined />,
    path: '/form',
    children: [
      {
        key: 'form-page',
        label: '常规表单',
        icon: '',
        path: '/form/page',
        element: <FormPage />,
      },
      {
        key: 'form-modal',
        label: '弹窗',
        icon: '',
        path: '/form/modal',
        element: <FormPage />,
      },
    ],
  },
  {
    key: 'system',
    label: '系统管理',
    icon: <SettingOutlined />,
    path: '/system',
    children: [
      {
        key: 'system-account',
        label: '账号管理',
        icon: '',
        path: '/system/account',
        element: <FormPage />,
      },
      {
        key: 'system-role',
        label: '角色管理',
        icon: '',
        path: '/system/role',
        element: <FormPage />,
      },
    ],
  },
  {
    path: '*',
    element: <>404 Not Found!</>,
  },
].map((k) => {
  k.theme = 'light';
  return k;
});

const routerMaps = getRouteMaps({ items: routerList });

const Router = () => {
  return useRoutes(routerList);
};

export { routerList, routerMaps, Router };
