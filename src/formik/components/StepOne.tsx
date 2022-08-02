import { ErrorMessage, Field } from 'formik'

interface IField {
    field: {
        name: string
        onBlur: () => void
        onChange: () => void
        value: string
    }
}

export default function StepOne() {
    return (
        <>
            <label htmlFor="name">Name: </label>
            <Field
                required
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
            >
                {({ field }: IField) => (
                    <>
                        <input {...field} type="text" />
                        <ErrorMessage name="name" />
                    </>
                )}
            </Field>
        </>
    )
}
