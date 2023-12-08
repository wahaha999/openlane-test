import React, { forwardRef } from 'react';
import { CustomizedInput } from '.';
import CustomIMaskInput from './cutomizedIMaskInput';


interface PhoneInputProps {
  value?: string; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  name: string;
  label?: string;
  variant?: 'filled' | 'outlined' | 'standard';
  helperText?: string;
  error: boolean;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value = '', onChange, onBlur, name, label, variant = 'standard', helperText, error }, ref) => {
    return (
      <CustomizedInput
        name={name}
        label={label}
        variant={variant}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        helperText={helperText}
        error={error}
        style={{width: '100%'}}
        InputProps={{
          inputComponent: CustomIMaskInput as any,
          inputProps: {
            mask: '+{1}(000)000-0000',
            ref: ref,
            onAccept: (value: string) => onChange({ target: { value, name } } as React.ChangeEvent<HTMLInputElement>)
          }
        }}
      />
    );
  }
);

export default PhoneInput;
