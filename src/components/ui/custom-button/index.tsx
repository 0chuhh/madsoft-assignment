import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';
import styles from './styles.module.scss';
import React from 'react';

const Variant:{[key:string]:string} = {
    primary: styles.primary,
    secondary: styles.secondary
}

export interface ICustomButtonProps extends Omit<ButtonProps, 'variant'> {
    variant?: keyof typeof Variant
 }

export const CustomButton: FC<ICustomButtonProps> = React.memo(({ variant='primary', children, ...restProps }) => {
    return (
        <Button
            {...restProps}
            className={[restProps.className, Variant[variant]].join(' ')}
            sx={{color:'#fff', fontFamily:'inherit'}}
        >
            {children}
        </Button>
    );
});