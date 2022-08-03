import { FieldError, UseFormRegister } from "react-hook-form";

interface IFormInput {
  name: string;
  age: string;
  email: string;
  password: string;
}

interface ModalStepTwoI {
  register: UseFormRegister<IFormInput>;
  errors: Record<string, FieldError>;
}

export default function StepTwo({ register, errors }: ModalStepTwoI) {
  return (
    <div className="inputReactFormHookWrapper">
      <label htmlFor="age">Age</label>
      <input
        type="text"
        id="age"
        placeholder="age"
        {...register("age", {
          required: {
            value: true,
            message: "This input is required",
          },
          min: {
            value: 2,
            message: "Input should not be lower than 2",
          },
          max: {
            value: 100,
            message: "Input should not be higher than 100",
          },
          pattern: {
            value: /^[0-9]*$/i,
            message: "Input should be a number",
          },
        })}
      />
      {errors.age?.message}
    </div>
  );
}
