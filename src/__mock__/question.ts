import mocks from "__mock__";
import { IQuestion } from "models/question";
import { IAnswer } from "models/answer";

const questions: IQuestion[] = [
    {
        id: 0,
        test_id: 0,
        name: 'Чему будет равно A после выполнения программы?',
        text: `
        int A = 1, B = 2, C = 3;
        
        if(C > B)
        {
            A++;
        }
        else
        {
            A--;
        }
                        `,
        question_type: 'one_variant'

    },
    {
        id: 1,
        test_id: 0,
        name: 'Чему будет равно B после выполнения программы?',
        text: `
        int A = 1, B = 2, C = 3;
        
        if(C > B)
        {
            A++;
        }
        else
        {
            A--;
        }
                        `,
        question_type: 'full_answer'

    }
];

const getQuestionsByTestId = (test_id: number): Promise<IQuestion[]> => {
    const questionList: IQuestion[] = questions.filter(q => q.test_id === test_id);
    questionList.forEach(q => {
        const answers = mocks.answers.getAnswersByQuestionId(q.id);
        if (answers.length !== 0) {
            q.answers = answers;
        }
    });

    return Promise.resolve(questionList);
};

const checkAnswerByQuestionId = (question_id: number, answer: IAnswer): Promise<boolean> => {
    const dbQuestion = questions.find(q => q.id === question_id);
    if (!dbQuestion) return Promise.resolve(false);
    const answers = mocks.answers.getAnswersWithCorrectFlagByQuestionId(question_id);
    
    switch (dbQuestion.question_type) {
        case 'full_answer':
            return Promise.resolve(answers[0].text.toLowerCase() === answer.text.toLowerCase());
        case 'one_variant':
            return Promise.resolve(answers.find(a => a.id === answer.id)?.is_correct || false);

        default:
            break;
    }
};

export default {
    questions,
    getQuestionsByTestId,
    checkAnswerByQuestionId
};