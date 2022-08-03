import MultistepForm from "./withoutAnyLibrary/MultistepForm";
import MultistepFormFormik from "./formik/MultistepFormFormik";
import MultistepFormReactFormHook from "./reactHookForm/MultistepFormReactFormHook";
import { useState } from "react";

export default function Form() {
  const [mode, setMode] = useState<"form" | "formik" | "react-hook-form">(
    "form"
  );

  const handleClick = (mode: "form" | "formik" | "react-hook-form") => {
    setMode(mode);
  };

  return (
    <>
      <div className="mode-buttons">
        <button onClick={() => handleClick("form")}>
          Form without library
        </button>
        <button onClick={() => handleClick("formik")}>Form with Formik</button>
        <button onClick={() => handleClick("react-hook-form")}>
          Form with react-hook-form
        </button>
      </div>

      {mode === "form" && <MultistepForm />}
      {mode === "formik" && <MultistepFormFormik />}
      {mode === "react-hook-form" && <MultistepFormReactFormHook />}
    </>
  );
}
