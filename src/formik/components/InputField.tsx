import { ErrorMessage, Field } from "formik";

interface IField {
  field: {
    name: string;
    onBlur: () => void;
    onChange: () => void;
    value: string;
  };
}

export default function InputField({ name: nameOfInput }: { name: string }) {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const label = capitalizeFirstLetter(nameOfInput);

  return (
    <div className="inputFormikWrapper">
      <label htmlFor={nameOfInput}>{label} </label>
      <Field
        required
        type={nameOfInput === "password" ? "password" : "text"}
        id={nameOfInput}
        name={nameOfInput}
        placeholder={`Enter your ${nameOfInput}`}
      >
        {({ field }: IField) => (
          <>
            <input
              {...field}
              type={nameOfInput === "password" ? "password" : "text"}
            />
            <p className="error">
              <ErrorMessage name={nameOfInput} />
            </p>
          </>
        )}
      </Field>
    </div>
  );
}
