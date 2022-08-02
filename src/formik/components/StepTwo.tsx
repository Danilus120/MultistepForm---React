import { ErrorMessage, Field } from 'formik'

interface IField {
    field: {
        name: string
        onBlur: () => void
        onChange: () => void
        value: string
    }
}

export default function StepTwo() {
    return (
        <>
            <label htmlFor="age">Age: </label>
            <Field
                required
                type="number"
                id="age"
                name="age"
                placeholder="Enter your age"
            >
                {({ field }: IField) => (
                    <>
                        <input {...field} type="text" />
                        <ErrorMessage name="age" />
                    </>
                )}
            </Field>
        </>
    )
}
