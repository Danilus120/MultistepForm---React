import { useState } from "react";

import {
  FormStateI,
  FormDataI,
  useMultistepFormI,
} from "./../types/useMultistepFormInterfaces";

import validatorInput from "../utils/ValidatorInputs";

const initialFormState: FormStateI = {
  step: 1,
  data: {
    step1: {
      name: "",
    },
    step2: {
      age: "",
    },
    step3: {
      email: "",
    },
    step4: {
      password: "",
    },
  },
  errors: {
    step1: {
      name: "",
    },
    step2: {
      age: "",
    },
    step3: {
      email: "",
    },
    step4: {
      password: "",
    },
  },
  isValid: false,
};

export const useMultistepForm = (): useMultistepFormI => {
  const [formState, setFormState] = useState<FormStateI>(initialFormState);
  const formStep = `step${formState.step}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const formStep = `step${formState.step}`; // X

    setFormState({
      // prev
      ...formState,
      data: {
        ...formState.data,
        [formStep]: {
          ...formState.data[formStep as keyof FormDataI],
          [name]: value,
        },
      },
    });
  };

  const checkIfStepIsValid = (step: number) => {
    const stepData = Object.values(formState.data)[step - 1];
    const stepDataValues: [string, string][] = Object.entries(stepData);

    const isValid = stepDataValues.every(
      ([key, value]) => validatorInput[key](value) === ""
    );

    const newErrors = stepDataValues.reduce(
      (acc: Record<string, string>, [key, value]) => {
        const errorMessage = validatorInput[key](value);
        return { ...acc, [key]: errorMessage };
        // acc[key] = errorMessage
        // return acc
      },
      {}
    );

    setFormState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        [formStep]: newErrors,
      },
    }));

    return isValid;
  };

  const isFormValid = () => {
    const errors = Object.values(formState.errors).map((error) => {
      const value = Object.values(error);
      return value;
    });

    return errors.flat().every((el) => el === "");
  };

  const nextPage = () => {
    const isValid = checkIfStepIsValid(formState.step);

    if (isValid && formState.step < 5) {
      setFormState((prev) => ({ ...prev, step: prev.step + 1 }));
    }
  };

  const submitForm = () => {
    const isFormInvalid = !isFormValid();

    if (isFormInvalid) {
      alert("Invalid");
      return;
    }

    alert(JSON.stringify(formState.data));
  };

  const buttonActions = {
    nextPage,
    submitForm,
  };

  return {
    formState,
    handleChange,
    buttonActions,
  };
};
