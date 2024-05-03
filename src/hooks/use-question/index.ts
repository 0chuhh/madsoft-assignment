import mocks from "__mock__";
import { useSessionStorage } from "hooks/use-session-storage";
import { StoredTest } from "hooks/use-test";
import { IAnswer } from "models/answer";
import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "store/hook";



export const useQuestion = (id: number) => {
    const { currentTest: test } = useAppSelector(state => state.currentTestSlice);

    const [isAnswered, setIsAnswered] = useState<boolean>(false);

    const testSessionStorageId = test ? `test-${test.id}` : null;
    const [storedTest, setStoredTest] = useSessionStorage<StoredTest>(testSessionStorageId);

    const checkIsAnswerStored = useCallback(() => {
        if (!storedTest) return false;
        const question = storedTest.questions.find(q => q.questionId === id);
        if (question) {
            return question.answer !== undefined;
        }
        return false;
    }, [id, storedTest]);

    const storeAnswerInSession = useCallback((answer: IAnswer) => {
        if (!test) return;
        if (!storedTest) return;
        const storedAnswer = {
            questionId: id,
            answer: answer,
        };
        const newStoredTest: StoredTest = {
            ...storedTest
        };
        //add or update question answer
        if (!checkIsAnswerStored()) {
            newStoredTest.questions = [...storedTest.questions, storedAnswer];
        } else {
            const storedQuestion = newStoredTest.questions.find(q => q.questionId === id)!;
            storedQuestion.answer = answer;
        }
        setStoredTest(newStoredTest);
    }, [checkIsAnswerStored, id, setStoredTest, storedTest, test]);



    const checkAnswer = useCallback(async (answer: IAnswer, callback?: (isCorrect: boolean) => void) => {
        if (!test) return false;
        const isCorrect = await mocks.questions.checkAnswerByQuestionId(id, answer);

        storeAnswerInSession(answer);

        if (callback) callback(isCorrect);
    }, [id, storeAnswerInSession, test]);

    useEffect(() => {
        setIsAnswered(() => {
            return checkIsAnswerStored();
        });
    }, [checkIsAnswerStored]);

    return {
        isAnswered,
        checkAnswer
    };
};