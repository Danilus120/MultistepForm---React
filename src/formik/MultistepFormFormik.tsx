import { useState } from "react";

import { Formik, Form } from "formik";

import formValidation from "./utils/formValidator";
import ModalContent from "./components/ModalContent";
import ModalButton from "./components/ModalButton";

interface FormikInfo {
  isValid: boolean;
  dirty: boolean;
}

const initialState = {
  name: "",
  age: "",
  email: "",
  password: "",
};

export default function MultistepFormFormik() {
  const [step, setStep] = useState(1);

  const currentValidationSchema = formValidation[step - 1];

  return (
    <>
      <Formik
        initialValues={initialState}
        validationSchema={currentValidationSchema}
        onSubmit={(values: Record<string, string>) =>
          alert(JSON.stringify(values))
        }
      >
        {({ isValid, dirty }: FormikInfo) => (
          <Form>
            <ModalContent step={step} />
            <ModalButton
              step={step}
              nextStep={() => {
                if (isValid && dirty) setStep((prev) => prev + 1);
              }}
              isFormValid={isValid}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
