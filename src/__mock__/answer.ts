import { IAnswer } from "models/answer";

interface DBAnswers extends IAnswer {
    is_correct:boolean
}
const answers:DBAnswers[] = [
    {
        id:0,
        text:'2',
        question_id:0,
        is_correct:true
    },
    {
        id:1,
        text:'1',
        question_id:0,
        is_correct:false
    },
    {
        id:2,
        text:'0',
        question_id:0,
        is_correct:false
    },
    {
        id:3,
        text:'5',
        question_id:0,
        is_correct:false
    },
    {
        id:4,
        text:'2',
        question_id:1,
        is_correct:true
    },
    // {
    //     id:5,
    //     text:'1',
    //     question_id:1,
    //     is_correct:false
    // },
    // {
    //     id:6,
    //     text:'0',
    //     question_id:1,
    //     is_correct:true
    // },
    // {
    //     id:7,
    //     text:'5',
    //     question_id:1,
    //     is_correct:false
    // }
    
]

const getAnswersByQuestionId = (question_id:number):IAnswer[] => {
    const dbAnswers = answers.filter(a=>a.question_id === question_id);
    const result:IAnswer[] = [];
    dbAnswers.forEach(a=>{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {is_correct:_, ...answer} = a;
        result.push(answer);
    })
    return result;
}

const getAnswersWithCorrectFlagByQuestionId = (question_id:number):DBAnswers[] => {
    const dbAnswers = answers.filter(a=>a.question_id === question_id);
    return dbAnswers;
}

export default {
    getAnswersByQuestionId,
    getAnswersWithCorrectFlagByQuestionId
}