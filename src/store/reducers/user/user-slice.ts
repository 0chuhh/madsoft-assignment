import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from 'models/user';

interface UserState {
    user:IUser | null;
    isLoading:boolean;
    error:string;
}

const initialState: UserState = {
    user:null,
    isLoading:false,
    error:''
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        userFetching(state){
            state.isLoading = true;
        },
        userFetchingSuccess(state, action:PayloadAction<IUser>){
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
        },
        userFetchingError(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        userLogout(state){
            state.isLoading = false;
            state.error = ''
            state.user = null
        }
    }
})

export default userSlice.reducer;