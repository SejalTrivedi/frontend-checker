import React, { ReactElement } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

export type MenuProps = {
  menuName: string;
  menuIcon: ReactElement;
  url: string;
};

export const Menu: React.FC<MenuProps> = ({ ...props }) => {
  return (
    <>
      <ListItem disablePadding>
          <Link to={props.url}>
            <ListItemButton>
              <ListItemIcon color="primary">
                {props.menuIcon}
              </ListItemIcon>
              <ListItemText color="primary">
                {props.menuName}
              </ListItemText>
            </ListItemButton>
          </Link>
      </ListItem>
    </>
  );
};
