import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

interface CustomIMaskInputProps {
  mask: string;
  placeholder?: string;
  onAccept?: (value: string) => void;
}

const CustomIMaskInput = forwardRef<HTMLInputElement, CustomIMaskInputProps>(
  ({ mask, placeholder, onAccept, ...restProps }, ref) => {
    return (
      <IMaskInput
        {...restProps}
        mask={mask}
        placeholder={placeholder}
        onAccept={onAccept}
        inputRef={ref}
      />
    );
  }
);

export default CustomIMaskInput;
