import * as React from 'react';
import {
  Typography,
  Box,
  List,
  ListItem,
  Divider,
} from '@mui/material';

import {
  UserAvatarMolecule,
  UserAvatarProps,
} from '../../molecules/UserAvatar/UserAvatar';

import {
  MenuList,
  MenuListProps,
} from '../../orgenisms/MenuList/MenuList';

export default function LeftNavBar() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <Typography variant="h3" color={'blue'} gutterBottom>
              Recruit
            </Typography>
          </ListItem>
          <MenuList></MenuList>
        </List>
        <Box mt="425px">
          <Divider />
          <List style={{ margin: '0px 0px 0px 5px' }}>
            <UserAvatarMolecule></UserAvatarMolecule>
          </List>
        </Box>
      </nav>
    </Box>
  );
}
