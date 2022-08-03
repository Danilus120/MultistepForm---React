import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import ModalContent from "./components/ModalContent";
import ModalButton from "./components/ModalButton";

import "./MultistepFormReactFormHook.scss";

interface IFormInput {
  name: string;
  age: string;
  email: string;
  password: string;
}

export default function MultistepFormReactFormHook() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert(JSON.stringify(data));
  };

  const nextStep = async () => {
    const result = await trigger();
    if (result) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="reactFormHookWrapper">
        <div className="reactFormHookWrapper__header">
          <h1>React Hook Form</h1>
        </div>
        <ModalContent step={step} register={register} errors={errors} />
        <ModalButton step={step} nextStep={nextStep} />
      </form>
    </>
  );
}
