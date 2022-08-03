import { useState } from "react";

import { Formik, Form } from "formik";

import formValidation from "./utils/formValidator";
import ModalContent from "./components/ModalContent";
import ModalButton from "./components/ModalButton";

import "./MultistepFormFormik.scss";

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
          <Form className="formikWrapper">
            <div className="formikWrapper__header">
              <h1>Formik</h1>
            </div>
            <ModalContent step={step} />
            <ModalButton
              step={step}
              nextStep={() => {
                if (isValid && dirty) setStep((prev) => prev + 1);
              }}
              isFormValid={isValid && dirty}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
