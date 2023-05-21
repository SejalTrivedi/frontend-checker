import React from 'react';
import {
  TextField as MuiTextField,
  BaseTextFieldProps as MuiTextFieldProps,
} from '@mui/material';

export interface BaseTextFieldProps extends MuiTextFieldProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<BaseTextFieldProps> = ({
  onChange,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return <MuiTextField {...props} onChange={handleChange} />;
};
