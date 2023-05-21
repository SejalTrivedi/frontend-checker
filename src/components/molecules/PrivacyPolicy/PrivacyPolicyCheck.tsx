// PrivacyPolicyCheck.tsx
import React, { useState } from 'react';
import { FormControlLabel, Typography } from '@mui/material';
import { Checkbox } from '../../atoms/CheckBox/CheckBox';
export interface PrivacyPolicyCheckProps {
  defaultChecked?: boolean;
}

const PrivacyPolicyCheck: React.FC<PrivacyPolicyCheckProps> = ({
  defaultChecked = false,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          color="primary"
        />
      }
      label={
        <Typography variant="body2">
          Remember me
        </Typography>
      }
    />
  );
};

export default PrivacyPolicyCheck;
