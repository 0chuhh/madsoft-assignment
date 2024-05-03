import { useAppDispatch, useAppSelector } from "store/hook";
import { testModalSlice } from "store/reducers/test-modal/test-modal-slice";

export const useTestModal = () => {
    const { isOpen } = useAppSelector(state => state.testModalSlice);
    const dispatch = useAppDispatch();

    const openModal = () => dispatch(testModalSlice.actions.openModal());

    const closeModal = () => dispatch(testModalSlice.actions.closeModal());

    const toggleModal = () => dispatch(testModalSlice.actions.closeModal());

    return { isOpenModal: isOpen, openModal, closeModal, toggleModal };
};