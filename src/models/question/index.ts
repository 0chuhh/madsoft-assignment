import { IAnswer } from "models/answer";

export enum QuestionTypeEnum {
    one_variant,
    some_variants,
    short_answer,
    full_answer
}

export type QuestionType = keyof typeof QuestionTypeEnum;

export interface IQuestion {
    id:number;
    test_id:number;
    name:string;
    text:string;
    question_type:QuestionType;
    answers?:IAnswer[] | null;
}