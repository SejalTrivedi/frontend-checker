import React from 'react';
import { Story, Meta } from '@storybook/react';
import PasswordField, { PasswordFieldProps } from './PasswordField';

export default {
  title: 'Example/PasswordField',
  component: PasswordField,
} as Meta;

const Template: Story<PasswordFieldProps> = (args) => <PasswordField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Password',
};
