import React from 'react'
import { FormStateI } from '../types/useMultistepFormInterfaces'

import StepFour from './StepFour'
import StepOne from './StepOne'
import StepThree from './StepThree'
import StepTwo from './StepTwo'

interface ModalContentI {
    step: number
    formState: FormStateI
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ModalContent({
    step,
    formState,
    handleChange,
}: ModalContentI) {
    switch (step) {
        case 1:
            return <StepOne formState={formState} handleChange={handleChange} />
        case 2:
            return <StepTwo formState={formState} handleChange={handleChange} />
        case 3:
            return (
                <StepThree formState={formState} handleChange={handleChange} />
            )
        case 4:
            return (
                <StepFour formState={formState} handleChange={handleChange} />
            )
        default:
            return (
                <>
                    <p>Summary</p>
                </>
            )
    }
}
