import { useMultistepForm } from "./hooks/useMultistepForm";

import "./multistepForm.scss";

import ModalContent from "./components/ModalContent";
import ModalButton from "./components/ModalButton";

export default function MultistepForm() {
  const { formState, handleChange, buttonActions } = useMultistepForm();
  const step = formState.step;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="modal">
      <div className="modal__header">
        <h1 className="modal__title">My Form</h1>
      </div>
      <div className="modal__body">
        <form onSubmit={handleSubmit}>
          <ModalContent
            step={step}
            formState={formState}
            handleChange={handleChange}
          />
          <ModalButton
            step={step}
            nextPage={buttonActions.nextPage}
            submit={buttonActions.submitForm}
          />
        </form>
      </div>
      <div className="">{formState.isValid}</div>
    </div>
  );
}
