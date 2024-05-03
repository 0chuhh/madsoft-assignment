import { IAnswer } from 'models/answer';
import React, {FC} from 'react'
import { BaseQuestion, QuestionProps } from '../../base-question';
import { OneVariantQuestionList } from './list';

export interface IOneVariantQuestionProps extends QuestionProps {
    answers: IAnswer[]
}

export const OneVariantQuestion:FC<IOneVariantQuestionProps> = ({answers, ...restProps}) => {
    return (
        <BaseQuestion  {...restProps}>
            <OneVariantQuestionList questionId={restProps.id} answers={answers}/>
        </BaseQuestion>
    )
}