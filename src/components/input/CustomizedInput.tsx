import React, { useState, ForwardedRef } from 'react';
import { TextField, TextFieldProps, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type CustomizedInputProps = TextFieldProps & {
  type?: 'text' | 'password';
};

const CustomizedInput = React.forwardRef((props: CustomizedInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);
  const { type, ...restProps } = props;

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && !showPassword ? 'password' : 'text';

  const endAdornment = type === 'password' ? (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleToggleShowPassword}
        edge="end"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  ) : null;

  return (
    <TextField
      ref={ref}
      margin="normal"
      fullWidth
      type={inputType}
      InputProps={{ endAdornment }}
      {...restProps}
    />
  );
});

export default CustomizedInput;