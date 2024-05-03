import { QuestionType } from "models/question";
import { IOneVariantQuestionProps, OneVariantQuestion } from "./one-variant";
import { FullAnswerVariantQuestion } from "./full-answer-variant";

type QuestionContentType = IOneVariantQuestionProps;

const QuestionVariants: { [key in QuestionType]: (content: any) => JSX.Element } = {
    one_variant: (content:IOneVariantQuestionProps) => <OneVariantQuestion {...content} />,
    some_variants: (content) => <OneVariantQuestion {...content} />,
    short_answer: (content) => <OneVariantQuestion {...content} />,
    full_answer: (content) => <FullAnswerVariantQuestion {...content} />,
};
export interface IQuestionConstructorProps<T> {
    questionType:QuestionType;
    content:T
}

export const QuestionConstructor = <T,>({questionType, content}:IQuestionConstructorProps<T>) => {
    return QuestionVariants[questionType](content);
};