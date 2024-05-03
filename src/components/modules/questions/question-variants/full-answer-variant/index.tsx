import React, { ChangeEvent, FC, useState } from 'react';
import { BaseQuestion, QuestionProps } from '../../base-question';
import { CustomInput } from 'components/ui/custom-input';
import { CustomButton } from 'components/ui/custom-button';
import styles from './styles.module.scss';
import { useQuestion } from 'hooks/use-question';
import { useTestModal } from 'hooks/use-test-modal';
import { IAnswer } from 'models/answer';
import Typography from '@mui/material/Typography';

export interface IFullAnswerVariantQuestionProps extends QuestionProps { }

export const FullAnswerVariantQuestion: FC<IFullAnswerVariantQuestionProps> = ({ ...restProps }) => {
    const [answerText, setAnswerText] = useState<string>('');

    const { isAnswered, checkAnswer } = useQuestion(restProps.id);

    const { openModal } = useTestModal();

    const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAnswerText(e.target.value);
    };

    const answerOnQuestion = () => {
        const answer: IAnswer = {
            id: 0,
            text: answerText,
            question_id: restProps.id
        };

        checkAnswer(answer, (isCorrect) => {
            openModal();
            console.log('correct', isCorrect);
        });
    };
    return (
        <BaseQuestion {...restProps}>
            <div className={styles.container}>
                <CustomInput fullWidth rows={2} multiline label='Ответ' value={answerText} onChange={handleAnswerChange} />
                <CustomButton onClick={answerOnQuestion}>Ответить</CustomButton>
                {isAnswered && <Typography color={"gray"}>Ответ зафиксирован</Typography>}
            </div>
        </BaseQuestion>
    );
};