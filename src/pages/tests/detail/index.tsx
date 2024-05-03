import { Container, Grid, Typography } from "@mui/material";
import { QuestionList, RefQuestionPagination } from "components/modules/questions/question-list";
import { CustomButton } from "components/ui/custom-button";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styles from './styles.module.scss';
import { useTest } from "hooks/use-test";
import { TestFeedbackModal } from "components/modules/questions/test-feedback-modal";
import { useTimer } from "hooks/use-timer";

const TestDetail = () => {
    const questionPaginationRef = useRef<RefQuestionPagination>(null);
    const { testId } = useParams();
    const { test, isStarted, getTestById, startTest, endTest } = useTest(Number(testId));
    const {time, startTimer, stopTimer} = useTimer(`test-${testId}`,test?.time_limit, ()=>alert('hui'));

    const handleNextPage = () => {
        if (!questionPaginationRef.current) return;
        questionPaginationRef.current.onNext();
    };
    const onStartTestClick = () => {
        startTimer(startTest);
    }
    const onEndTestClick = () => {
        stopTimer(endTest);
    }
    useEffect(() => {
        getTestById();
    }, [getTestById, testId]);

    return test && (
        <Container sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid container spacing={2} className={styles.wrapper}>
                <Grid item xs={12} display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'}>
                    <Typography variant="h3">{test?.name}</Typography>
                    {isStarted && <CustomButton onClick={onEndTestClick}>Завершить тестирование</CustomButton>}
                </Grid>
                <Grid item xs={12}><Typography color="text.secondary" gutterBottom>{test?.description}</Typography></Grid>
                <Grid item xs={12}><Typography>Ограничение по времени: {time}</Typography></Grid>
                {
                    !isStarted && (
                        <Grid item xs={12}>
                            <CustomButton onClick={onStartTestClick}>Начать</CustomButton>
                        </Grid>
                    )
                }
                {isStarted && <QuestionList ref={questionPaginationRef} test_Id={test.id} />}
                <TestFeedbackModal onNextPageClick={handleNextPage} variant="success" />
            </Grid>
        </Container>
    );
};

export default TestDetail;