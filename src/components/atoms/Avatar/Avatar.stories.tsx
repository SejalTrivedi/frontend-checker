import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';
import './logo192.png';

const meta = {
  title: 'Components/Atoms/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const UserAvatar = Template.bind({});
UserAvatar.args = {
  //   variant: 'rounded',
  src: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
  //   sx: { width: 24, height: 24 },
  alt: 'Default avatar',
};
