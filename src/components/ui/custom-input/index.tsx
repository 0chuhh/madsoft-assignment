import { StandardTextFieldProps, TextField } from '@mui/material';
import React, {FC} from 'react'

export interface ICustomInputProps extends StandardTextFieldProps {}

export const CustomInput:FC<ICustomInputProps> = React.memo(({...restProps}) => {
    return (
        <TextField {...restProps}/>
    )
})