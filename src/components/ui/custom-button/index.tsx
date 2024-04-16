import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';
import styles from './styles.module.scss';
import React from 'react';

export interface ICustomButtonProps extends ButtonProps { }

export const CustomButton: FC<ICustomButtonProps> = React.memo(({ children, ...restProps }) => {
    return (
        <Button
            {...restProps}
            className={[restProps.className, styles.button].join(' ')}
        >
            {children}
        </Button>
    );
});