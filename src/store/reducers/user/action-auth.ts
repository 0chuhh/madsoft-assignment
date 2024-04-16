import { AppDispatch } from "store/store";
import { userSlice } from "./user-slice";
import { UserCredentials } from "models/user";
import mocks from "__mock__/";

export const loginUser = (credentials: UserCredentials) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(
                userSlice
                    .actions
                    .userFetching()
            );

            const dbuser = mocks.users.find(u => (
                u.username === credentials.username
                && u.password === credentials.password
            ));
            if (!dbuser) {
                throw new Error('wrong creds');
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password: _, ...user } = dbuser;

            sessionStorage.setItem('user', JSON.stringify(user));
            dispatch(
                userSlice
                    .actions
                    .userFetchingSuccess(user)
            );

        } catch (error) {
            dispatch(
                userSlice
                    .actions
                    .userFetchingError(
                        (error as Error)
                            .message
                    )
            );
        }
    };


export const getUser = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(
            userSlice
                .actions
                .userFetching()
        );
        const user = sessionStorage.getItem('user');
        if (user) {
            dispatch(
                userSlice.actions.userFetchingSuccess(JSON.parse(user))
            );
        } else {
            dispatch(
                userSlice
                    .actions
                    .userFetchingError('user not found')
            );
        }
    } catch (error) {
        dispatch(
            userSlice
                .actions
                .userFetchingError(
                    (error as Error)
                        .message
                )
        );
    }
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(
            userSlice
                .actions
                .userFetching()
        );
        sessionStorage.removeItem('user');
        dispatch(userSlice.actions.userLogout());
    } catch (error) {
        dispatch(
            userSlice
                .actions
                .userFetchingError(
                    (error as Error)
                        .message
                )
        );
    }
};