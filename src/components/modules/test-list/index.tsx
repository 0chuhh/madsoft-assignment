import mocks from '__mock__';
import { ITest } from 'models/test';
import React, {FC, useEffect, useState} from 'react'
import { TestItem } from './item';
import { Grid } from '@mui/material';

export interface ITestListProps {
    user_id:number
}

export const TestList:FC<ITestListProps> = React.memo(({user_id}) => {
    const [ tests, setTests ] = useState<ITest[]>([]);

    useEffect(()=>{
        const getTestsByUserId = async () => {
            const tests = await mocks.tests.getTestsByUserId(user_id);
            setTests(tests)
        }
        getTestsByUserId();
    },[user_id])
    
    return (
        <Grid container spacing={2}>
            {
                tests.map(t=>(
                    <TestItem key={t.id} {...t}/>
                ))
            }
        </Grid>
    )
})