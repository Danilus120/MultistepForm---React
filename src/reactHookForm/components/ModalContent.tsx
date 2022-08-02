import React from 'react'

import { FieldError, UseFormRegister } from 'react-hook-form'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'

interface IFormInput {
    name: string
    age: string
    email: string
    password: string
}

interface ModalContentI {
    step: number
    register: UseFormRegister<IFormInput>
    errors: Record<string, FieldError>
}

export default function ModalContent({
    step,
    register,
    errors,
}: ModalContentI) {
    switch (step) {
        case 1:
            return <StepOne register={register} errors={errors} />
        case 2:
            return <StepTwo register={register} errors={errors} />
        case 3:
            return <StepThree register={register} errors={errors} />
        case 4:
            return <StepFour register={register} errors={errors} />
        default:
            return (
                <>
                    <p>Summary</p>
                </>
            )
    }
}
