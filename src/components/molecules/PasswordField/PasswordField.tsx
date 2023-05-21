import React, { useState } from 'react';
import { TextField } from '../../atoms/TextField/TextField';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export interface PasswordFieldProps {
  label: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ label }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <TextField
      label={label}
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={handleChangePassword}
      inputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
