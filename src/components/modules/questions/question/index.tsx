import { IQuestion } from 'models/question';
import React, { FC } from 'react';
import { QuestionConstructor } from '../question-variants';

export interface IQuestionProps {
    question: IQuestion;
}

export const Question: FC<IQuestionProps> = ({ question }) => {
    return <QuestionConstructor
        questionType={question.question_type}
        content={question}
    />;
};