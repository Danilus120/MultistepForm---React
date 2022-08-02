import { FormStateI } from '../types/useMultistepFormInterfaces'

interface StepI {
    formState: FormStateI
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function StepOne({ formState, handleChange }: StepI) {
    return (
        <>
            {/* label="Name:" name="name" /type?="text"/ step='step1' */}
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" onChange={handleChange} />
            {formState.errors.step1.name && `${formState.errors.step1.name}`}
            {/* formState.errors[step][name] */}
        </>
    )
}
