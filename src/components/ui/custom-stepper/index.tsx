import { MobileStepper, MobileStepperProps } from '@mui/material';
import React, { FC } from 'react';
import { CustomButton } from '../custom-button';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

export interface ICustomStepperProps extends Omit<MobileStepperProps, 'nextButton' | 'backButton'> {
    currentPage: number;
    onNext: () => void;
    onPrev: () => void;
}

export const CustomStepper: FC<ICustomStepperProps> = React.memo(({ currentPage, onNext, onPrev, steps, ...restProps }) => {

    return (
        <MobileStepper
            {...restProps}
            activeStep={currentPage}
            steps={steps}
            nextButton={
                <CustomButton size="small" onClick={onNext} disabled={currentPage === steps - 1}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        Далее
                        <KeyboardArrowRight />
                    </div>
                </CustomButton>
            }
            backButton={
                <CustomButton size="small" onClick={onPrev} disabled={currentPage === 0}>
                    <KeyboardArrowLeft />
                    Назад
                </CustomButton>
            }
        />
    );
});