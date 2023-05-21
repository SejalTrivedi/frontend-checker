// PrivacyPolicyCheck.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import PrivacyPolicyCheck, { PrivacyPolicyCheckProps } from './PrivacyPolicyCheck';

export default {
  title: 'Molecules/PrivacyPolicyCheck',
  component: PrivacyPolicyCheck,
  argTypes: {
    defaultChecked: { control: 'boolean' },
  },
} as Meta;

const Template: Story<PrivacyPolicyCheckProps> = (args) => (
  <PrivacyPolicyCheck {...args} />
);

export const Default = Template.bind({});
Default.args = {
  defaultChecked: false,
};
