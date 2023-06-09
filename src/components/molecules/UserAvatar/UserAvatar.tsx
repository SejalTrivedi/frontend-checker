import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import { Avatar as UserAvatar } from '../../atoms/Avatar/Avatar';
import { Button } from '../../atoms/Button/Button';
import { LoginOutlined } from '@mui/icons-material';

export type UserAvatarProps = {
  // Define any props specific to your component
};

export const UserAvatarMolecule: React.FC<UserAvatarProps> = ({
  ...props
}) => {
  return (
    <Stack direction="row" spacing={1}>
      <UserAvatar
        alt="Remy Sharp"
        src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
        sx={{ width: 50, height: 50 }}
      />
      <Typography mb={2} maxWidth={400} lineHeight="lg">
        Ronak Delvadiya <Typography>Ronak.io</Typography>
      </Typography>
      <Button startIcon={<LoginOutlined></LoginOutlined>} />
    </Stack>
  );
};
