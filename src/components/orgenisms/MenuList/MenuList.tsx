import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import {
  HomeOutlined,
  GavelOutlined,
  PeopleAltOutlined,
  AnalyticsOutlined,
  AccountBoxOutlined,
  ArticleOutlined,
  NoteAltOutlined,
} from '@mui/icons-material';

import { Menu, MenuProps } from '../../atoms/Menu/Menu';

export type MenuListProps = {};

export const MenuList: React.FC<MenuListProps> = ({ ...props }) => {
  const nav_bar_list_property = [
    { menuName: 'Home', menuIcon: <HomeOutlined />, url: ''},
    { menuName: 'Candidates', menuIcon: <PeopleAltOutlined />, url: '/candidate' },
    { menuName: 'Adverse_Actions', menuIcon: <GavelOutlined />, url: '' },
    { menuName: 'Logs', menuIcon: <ArticleOutlined />, url: '' },
    { menuName: 'Analytics', menuIcon: <AnalyticsOutlined />, url: '' },
    { menuName: 'Account', menuIcon: <AccountBoxOutlined />, url: '' },
    { menuName: 'Screenings', menuIcon: <NoteAltOutlined />, url: '' },
  ];

  return (
    <>
      {nav_bar_list_property.map((menu) => {
        return (
          <>
            <Menu
              menuIcon={menu.menuIcon}
              menuName={menu.menuName}
              url={menu.url}
            ></Menu>
          </>
        );
      })}
    </>
  );
};
