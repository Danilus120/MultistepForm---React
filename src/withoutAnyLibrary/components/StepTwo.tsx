import { FormStateI } from '../types/useMultistepFormInterfaces'

interface StepI {
    formState: FormStateI
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function StepOne({ formState, handleChange }: StepI) {
    return (
        <>
            <label htmlFor="age">Age: </label>
            <input type="number" id="age" name="age" onChange={handleChange} />
            {formState.errors.step2.age && `${formState.errors.step2.age}`}
        </>
    )
}
