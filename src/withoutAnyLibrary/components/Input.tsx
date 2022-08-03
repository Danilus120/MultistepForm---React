import { FormStateI } from "../types/useMultistepFormInterfaces";

interface InputI {
  name: string;
  formState: FormStateI;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  name: nameOfInput,
  formState,
  handleChange,
}: InputI) {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const label = capitalizeFirstLetter(nameOfInput);
  const step = "step" + formState.step;

  return (
    <div className="inputWrapper">
      <label htmlFor={nameOfInput}>{label} </label>
      <input
        type={nameOfInput === "password" ? "password" : "text"}
        id={nameOfInput}
        name={nameOfInput}
        onChange={handleChange}
      />
      <p className="error">
        {formState.errors[step][nameOfInput] &&
          `${formState.errors[step][nameOfInput]}`}
      </p>
    </div>
  );
}
