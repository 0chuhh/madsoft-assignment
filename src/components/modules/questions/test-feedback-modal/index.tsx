import { Box, Modal, ModalProps, Typography } from '@mui/material';
import { CustomButton } from 'components/ui/custom-button';
import React, { FC } from 'react';
import styles from './styles.module.scss';
import { useTestModal } from 'hooks/use-test-modal';

const Variant: { [key: string]: string; } = {
    standart: styles.standart,
    success: styles.success,
    fail: styles.fail
};

export type TestModalVariant = keyof typeof Variant;

export interface ITestFeedbackModalProps extends Omit<ModalProps, 'children' | 'open' | 'onClose'> {
    variant?: TestModalVariant;
    onNextPageClick: () => void;
}

export const TestFeedbackModal: FC<ITestFeedbackModalProps> = React.memo(({
    variant = 'standart',
    onNextPageClick,
    ...restProps
}) => {
    const isSuccess = variant === Variant['success'];
    console.log(isSuccess);

    const { isOpenModal, closeModal } = useTestModal();

    const next = () => {
        closeModal();
        onNextPageClick();
    };

    return (
        <Modal {...restProps} open={isOpenModal} onClose={closeModal}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                margin: '0 auto',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                maxWidth: '700px',
                height: '100%',
                maxHeight: '350px',
                backgroundColor: '#fff',
                borderRadius: '20px',
                padding: '30px 30px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography variant='h4' textAlign={'center'} textTransform={'uppercase'}>Ответ принят</Typography>
                <Typography variant='subtitle1' color={'gray'}>Ваш ответ записан, вы можете изменить его в любой момент</Typography>
                <div className={styles.btns}>
                    <CustomButton onClick={closeModal} variant={'secondary'}>Закрыть</CustomButton>
                    <CustomButton onClick={next}>К следующему вопросу</CustomButton>
                </div>
            </Box>
        </Modal>
    );
});