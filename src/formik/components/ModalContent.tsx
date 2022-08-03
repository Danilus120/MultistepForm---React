import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

interface ModalContentI {
  step: number;
}

export default function ModalContent({ step }: ModalContentI) {
  switch (step) {
    case 1:
      return <StepOne />;
    case 2:
      return <StepTwo />;
    case 3:
      return <StepThree />;
    case 4:
      return <StepFour />;
    default:
      return (
        <>
          <p>Summary</p>
        </>
      );
  }
}
