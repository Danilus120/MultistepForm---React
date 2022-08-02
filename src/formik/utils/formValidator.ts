import * as Yup from "yup";

// Regexp that matches only letters in string
const onlyLettersRegexp = /^[a-zA-Z]+$/;
const lettersRegexp = new RegExp(onlyLettersRegexp, "g");

// Regexp that matches at least numbers in string
const atLeastOneNumberRegexp = /^(?=.*[0-9])/;
const numberRegexp = new RegExp(atLeastOneNumberRegexp, "g");

// Regexp that matches string with at least one lowercase
const atLeastOneLowercaseRegexp = /^(?=.*[a-z])/;
const lowercaseRegexp = new RegExp(atLeastOneLowercaseRegexp, "g");

// Regexp that matches string with at least one uppercase
const atLeastOneUppercaseRegexp = /^(?=.*[A-Z])/;
const uppercaseRegexp = new RegExp(atLeastOneUppercaseRegexp, "g");

// Regexp that matches string with at least one special sign
const atLeastOneSpecialSignRegexp = /^(?=.*[!@#$%^&*])/;
const specialSignRegexp = new RegExp(atLeastOneSpecialSignRegexp, "g");

const formValidation = [
  Yup.object().shape({
    name: Yup.string()
      .min(4, "Name must be longer than 3 chars")
      .required("This field is required!")
      .matches(lettersRegexp, {
        message: "Name must contain only letters",
      }),
  }),
  Yup.object().shape({
    age: Yup.number()
      .required("This field is required!")
      .min(2, "Age cannot be lower than 2")
      .max(100, "Age cannot be higher than 100"),
  }),
  Yup.object().shape({
    email: Yup.string()
      .required("This field is required!")
      .email("Email must be a valid email"),
  }),
  Yup.object().shape({
    password: Yup.string()
      .required("This field is required!")
      .min(8, "Password must have more than 8 characters")
      .matches(lowercaseRegexp, {
        message: "Password must have at least one lowercase",
      })
      .matches(uppercaseRegexp, {
        message: "Password must have at least one uppercase",
      })
      .matches(numberRegexp, {
        message: "Password must have at least one number",
      })
      .matches(specialSignRegexp, {
        message: "Password must have at least one special sign",
      }),
  }),
];

export default formValidation;
