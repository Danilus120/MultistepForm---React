import { ErrorMessage, Field } from 'formik'

interface IField {
    field: {
        name: string
        onBlur: () => void
        onChange: () => void
        value: string
    }
}

export default function StepFour() {
    return (
        <>
            <label htmlFor="password">Password: </label>
            <Field
                required
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
            >
                {({ field }: IField) => (
                    <>
                        <input {...field} type="text" />
                        <ErrorMessage name="password" />
                    </>
                )}
            </Field>
        </>
    )
}
