'use client';
import React, { ForwardedRef } from 'react'
import { TextField, TextFieldProps } from '@mui/material'

const MyTextField = React.forwardRef((props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => (
    <TextField
      ref={ref}
      margin="normal"
      fullWidth
      {...props}
    />
  )
);

export { MyTextField }