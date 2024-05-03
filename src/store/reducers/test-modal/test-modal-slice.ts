import { createSlice } from '@reduxjs/toolkit';
import { TestModalVariant } from 'components/modules/questions/test-feedback-modal';



interface TestModalState {
    isOpen: boolean;
    variant: TestModalVariant;
}

const initialState: TestModalState = {
    isOpen: false,
    variant: 'standart',
};

export const testModalSlice = createSlice({
    name: 'testModal',
    initialState,
    reducers: {
        openModal(state) {
            state.isOpen = true;
        },
        closeModal(state) {
            state.isOpen = false;
        },
        toggleModal(state) {
            state.isOpen = !state.isOpen;
        }
    }
});

export default testModalSlice.reducer;