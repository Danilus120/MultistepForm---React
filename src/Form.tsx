import MultistepForm from "./withoutAnyLibrary/MultistepForm";
import MultistepFormFormik from "./formik/MultistepFormFormik";
import MultistepFormReactFormHook from "./reactHookForm/MultistepFormReactFormHook";

export default function Form() {
  return (
    <>
      <MultistepForm />
      {/* <MultistepFormFormik /> */}
      {/* <MultistepFormReactFormHook /> */}
    </>
  );
}
