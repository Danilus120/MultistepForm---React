import { FieldError, UseFormRegister } from "react-hook-form";

interface IFormInput {
  name: string;
  age: string;
  email: string;
  password: string;
}

interface ModalStepFourI {
  register: UseFormRegister<IFormInput>;
  errors: Record<string, FieldError>;
}

export default function StepFour({ register, errors }: ModalStepFourI) {
  return (
    <div className="inputReactFormHookWrapper">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="password"
        {...register("password", {
          required: {
            value: true,
            message: "This input is required",
          },
          min: {
            value: 8,
            message: "Input shound contain minimum 8 chars",
          },
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
            message:
              "Input should contain at least 1 special char, 1 number, 1 uppercase letter and 1 lowercase letter",
          },
        })}
      />
      {errors.password?.message}
    </div>
  );
}
