import { FormStateI } from "../types/useMultistepFormInterfaces";
import Input from "./Input";

interface StepI {
  formState: FormStateI;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StepOne({ formState, handleChange }: StepI) {
  return (
    <Input
      formState={formState}
      handleChange={handleChange}
      name={"password"}
    />
  );
}
