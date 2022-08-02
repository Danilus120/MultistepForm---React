import { FieldError, UseFormRegister } from 'react-hook-form'

interface IFormInput {
    name: string
    age: string
    email: string
    password: string
}

interface ModalStepOneI {
    register: UseFormRegister<IFormInput>
    errors: Record<string, FieldError>
}

export default function StepOne({ register, errors }: ModalStepOneI) {
    return (
        <>
            <input
                type="text"
                placeholder="name"
                {...register('name', {
                    required: {
                        value: true,
                        message: 'This input is required',
                    },
                    minLength: {
                        value: 3,
                        message: 'This input should have at least 3 letters',
                    },
                    maxLength: {
                        value: 20,
                        message:
                            'This input should not be longer than 20 letters',
                    },
                    pattern: {
                        value: /^[a-zA-Z]+$/i,
                        message: 'This input should contain only letters',
                    },
                })}
            />
            {errors.name?.message}
        </>
    )
}
