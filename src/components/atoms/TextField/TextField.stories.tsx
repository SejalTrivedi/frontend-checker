import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField, BaseTextFieldProps } from './TextField';

const meta: Meta<BaseTextFieldProps> = {
  title: 'Components/Atoms/TextField',
  component: TextField,
};

export default meta;

const Template: Story<BaseTextFieldProps> = (args) => (
  <TextField {...args} />
);

export const SimpleOutlinedTextField = Template.bind({});
SimpleOutlinedTextField.args = {
  variant: 'outlined',
  placeholder: 'Simple Outlined TextField',
  onChange: (event) => {
    console.log(event.target.value); // Handle the change event here
  },
};

export const PasswordContentTextField = Template.bind({});
PasswordContentTextField.args = {
  variant: 'outlined',
  placeholder: 'Password content',
  type: 'password',
  onChange: (event) => {
    console.log(event.target.value); // Handle the change event here
  },
};

export const CustomDateField = Template.bind({});
CustomDateField.args = {
  type: 'date',
  value: Date().toString(),
  onChange: (event) => {
    console.log(event.target.value); // Handle the change event here
  },
};
