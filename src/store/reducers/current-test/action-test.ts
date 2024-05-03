import { AppDispatch } from "store/store";
import mocks from "__mock__/";
import { currentTestSlice } from "./current-test-slice";

export const getCurrentTestById = (id: number) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(
                currentTestSlice
                    .actions
                    .currentTestFetching()
            );
            const test = await mocks.tests.getTestByTestId(id);

            dispatch(
                currentTestSlice
                    .actions
                    .currentTestFetchingSuccess(test)
            );

        } catch (error) {
            dispatch(
                currentTestSlice
                    .actions
                    .currentTestFetchingError(
                        (error as Error)
                            .message
                    )
            );
        }
    };
