import { ErrorMessage, Field } from 'formik'

interface IField {
    field: {
        name: string
        onBlur: () => void
        onChange: () => void
        value: string
    }
}

export default function StepThree() {
    return (
        <>
            <label htmlFor="email">Email: </label>
            <Field
                required
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
            >
                {({ field }: IField) => (
                    <>
                        <input {...field} type="text" />
                        <ErrorMessage name="email" />
                    </>
                )}
            </Field>
        </>
    )
}
