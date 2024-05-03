import React, { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { Typography } from '@mui/material';

export interface QuestionProps {
    id:number;
    name: string,
    text: string;
}


export type IBaseQuestionProps = QuestionProps & PropsWithChildren;

export const BaseQuestion: FC<IBaseQuestionProps> = ({ name, text, children }) => {
    return (
        <div className={styles.wrapper}>
            <Typography variant='h4'>{name}</Typography>
            <Typography component={'pre'}>{text}</Typography>
            {children}
        </div>
    );
};