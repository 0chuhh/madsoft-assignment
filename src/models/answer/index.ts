import { IQuestion } from "models/question";

export interface IAnswer {
    id:number;
    text:string;
    question_id:IQuestion['id'];
}