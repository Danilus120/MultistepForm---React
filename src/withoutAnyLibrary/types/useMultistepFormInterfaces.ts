export interface FormDataI {
  step1: Record<string, string>;
  step2: Record<string, string>;
  step3: Record<string, string>;
  step4: Record<string, string>;
}

export type FormErrorsI = Record<string, any>;
// {

//   step1: Record<string, string | null>;
//   step2: {
//     age: string | null;
//   };
//   step3: {
//     email: string | null;
//   };
//   step4: {
//     password: string | null;
//   };
// }

export interface FormStateI {
  step: number;
  data: FormDataI;
  errors: FormErrorsI;
  isValid: boolean;
}

export interface useMultistepFormI {
  formState: FormStateI;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonActions: {
    nextPage: () => void;
    submitForm: () => void;
  };
}
