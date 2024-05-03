import { Grid } from '@mui/material';
import mocks from '__mock__';
import { CustomStepper } from 'components/ui/custom-stepper';
import { IQuestion } from 'models/question';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Question } from '../question';

export interface RefQuestionPagination {
    onPrev: () => void;
    onNext: () => void;
}

export interface IQuestionListProps {
    test_Id: number;
}

export const QuestionList = forwardRef<RefQuestionPagination, IQuestionListProps>(({ test_Id }, ref) => {

    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        const getQuestionsByTestId = async () => {
            const questions = await mocks.questions.getQuestionsByTestId(Number(test_Id));
            console.log(questions);
            setQuestions(questions);
        };
        getQuestionsByTestId();
    }, [test_Id]);

    const handleNext = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleBack = () => {
        setPage((prevPage) => prevPage - 1);
    };


    useImperativeHandle(ref, () => ({
        onPrev: handleBack,
        onNext: handleNext
    }));

    return questions.length && (
        <Grid item>

            <Question question={questions[page]} />
            {/* =============pagination======== */}
            <CustomStepper
                currentPage={page}
                onNext={handleNext}
                onPrev={handleBack}
                steps={questions.length}
            />
        </Grid>
    );
});