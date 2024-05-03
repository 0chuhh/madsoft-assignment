import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITest } from 'models/test';

interface currentTestState {
    currentTest:ITest | null;
    isLoading:boolean;
    error:string;
}

const initialState: currentTestState = {
    currentTest:null,
    isLoading:false,
    error:''
}

export const currentTestSlice = createSlice({
    name:'currentTest',
    initialState,
    reducers:{
        currentTestFetching(state){
            state.isLoading = true;
        },
        currentTestFetchingSuccess(state, action:PayloadAction<ITest|null>){
            state.isLoading = false;
            state.error = '';
            state.currentTest = action.payload;
        },
        currentTestFetchingError(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default currentTestSlice.reducer;