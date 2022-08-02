import { FormStateI } from '../types/useMultistepFormInterfaces'

interface StepI {
    formState: FormStateI
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function StepOne({ formState, handleChange }: StepI) {
    return (
        <>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
            />
            {formState.errors.step3.email && `${formState.errors.step3.email}`}
        </>
    )
}
