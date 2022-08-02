import { FormStateI } from '../types/useMultistepFormInterfaces'

interface StepI {
    formState: FormStateI
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function StepOne({ formState, handleChange }: StepI) {
    return (
        <>
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
            />
            {formState.errors.step4.password &&
                `${formState.errors.step4.password}`}
        </>
    )
}
