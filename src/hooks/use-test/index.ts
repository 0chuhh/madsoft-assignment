import { ITest } from "models/test";
import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hook";
import { currentTestSlice } from "store/reducers/current-test/current-test-slice";
import { getCurrentTestById } from "store/reducers/current-test/action-test";
import { IAnswer } from "models/answer";
import { useSessionStorage } from "hooks/use-session-storage";

interface StoredAnswer {
    questionId:number,
    answer: IAnswer
}

export interface StoredTest extends ITest {
    questions:StoredAnswer[]
    startTime:number,
    finishTime:number
}

export const useTest = (id:number) => {
    const { currentTest: test } = useAppSelector(state => state.currentTestSlice);
    const dispatch = useAppDispatch();
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const testSessionStorageId = test ? `test-${test.id}` : null;
    const [storedTest, setStoredTest] = useSessionStorage<StoredTest>(testSessionStorageId);

    const getTestById = useCallback(async () => {
        if (storedTest) {
            dispatch(
                currentTestSlice
                    .actions
                    .currentTestFetchingSuccess(storedTest)
            );
            setIsStarted(true);
        } else {
            dispatch(getCurrentTestById(id));
        }
    }, [dispatch, id, storedTest]);

    const startTest = () => {
        if (!test) return;
        if (storedTest) return;

        const startTime = Date.now();
        const finishTime = Date.now() + 1000 * test?.time_limit;
        setStoredTest({ ...test, startTime, finishTime, questions:[] });
        setIsStarted(true);
    };

    const endTest = () => {
        console.log(storedTest)
    }

    return {
        isStarted,
        test,
        getTestById,
        startTest,
        endTest
    };
};