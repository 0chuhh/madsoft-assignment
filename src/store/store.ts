import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/user/user-slice';
import currentTestSlice from "./reducers/current-test/current-test-slice";
import testModalSlice from "./reducers/test-modal/test-modal-slice";

const rootReducer = combineReducers({
    userReducer,
    currentTestSlice,
    testModalSlice
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];