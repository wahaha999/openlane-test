// import React, { useState } from 'react';
// import { TextFieldProps } from '@mui/material'
// import { MyTextField as Input } from './Input';

// type PropsType {
//     id: string,
//     label: string,
//     value: string,
//     onChange: (e: string) => void,
//     helperText: string | undefined,
//     error: boolean
// }


// const PhoneNumberInput: React.FC = ({value, onChange, ...rest}: PropsType) => {
//     const regex = /^(\+\d{1,3}\(\d{3}\)\d{3}-\d{4}|)$/;

//     const onNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const val = event.target.value;
//         if (regex.test(val) || val === '') {
//             onChange(val);
//         }
//     };

//     return (
//         <Input
//             type="text"
//             value={value}
//             onChange={onNumberChange}
//             placeholder="+123 (456) 789-0123"
//             {...rest}
//         />
//     );
// };

// export default PhoneNumberInput;
