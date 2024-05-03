import { IAnswer } from 'models/answer';
import React, { FC } from 'react';
import styles from './styles.module.scss';
import { useQuestion } from 'hooks/use-question';
import { Typography } from '@mui/material';
import { useTestModal } from 'hooks/use-test-modal';
import { CustomButton } from 'components/ui/custom-button';

export interface IOneVariantQuestionListProps {
    questionId: number;
    answers: IAnswer[];
}

export const OneVariantQuestionList: FC<IOneVariantQuestionListProps> = ({ questionId, answers }) => {
    const { isAnswered, checkAnswer } = useQuestion(questionId);
    const { openModal } = useTestModal();

    const onItemClick = (answer: IAnswer) => {
        checkAnswer(answer, (isCorrect) => {
            openModal();
            console.log('correct', isCorrect);
        });
    };

    return (
        <div className={styles.list}>
            {
                answers.map(a => (
                    <OneVariantListItem onClick={onItemClick} key={a.id} answer={a} />
                ))
            }
            {isAnswered && <Typography color={"gray"}>Ответ зафиксирован</Typography>}
        </div>
    );
};

interface IOneVariantListItemProps {
    answer: IAnswer;
    onClick: (answer: IAnswer) => void;
}

const OneVariantListItem: FC<IOneVariantListItemProps> = React.memo(({ answer, onClick }) => {
    const handleClick = () => onClick(answer);
    return (
        <CustomButton onClick={handleClick}>{answer.text}</CustomButton>
    );
});