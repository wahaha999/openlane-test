import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

interface CustomIMaskInputProps {
  mask: string;
  placeholder?: string;
  onAccept?: (value: string) => void;
  // No need for inputRef here since we are directly forwarding the ref
}

const CustomIMaskInput = forwardRef<HTMLInputElement, CustomIMaskInputProps>(
  ({ mask, placeholder, onAccept, ...restProps }, ref) => {
    return (
      <IMaskInput
        {...restProps}
        mask={mask}
        placeholder={placeholder}
        onAccept={onAccept}
        inputRef={ref} // Directly forward the ref here
      />
    );
  }
);

export default CustomIMaskInput;
