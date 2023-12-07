import * as yup from "yup";
import { favoriteColors } from "./constant";

const loginSchemaObject = {
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required."),
    password: yup
      .string()
      .required("Password is required.")
      .min(10, "At least 10 chars")
      .max(32, "Less than 32 chars")
      .matches(/.*[A-Z].*[A-Z].*/, "At least two uppercase chars")
      .matches(/.*[0-9].*[0-9].*/, "At least two numbers")
      .matches(/.*[!@#$%^&+=].*/, "At least one special char")
      .matches(
        /[a-zA-Z]+[^a-zA-Z\s]+/,
        "At least 1 number or special char (@,!,#, etc)."
      ),
  }

// login schema
const loginSchema = yup.object().shape(loginSchemaObject);

// profile schema
const profileSchema = yup.object().shape({
    ...loginSchemaObject,
    fullName: yup
    .string()
    .required("Full name is required.")
    .min(3, "At least 3 chars"),
    phoneNumber: yup
    .string()
    .matches(/^(\+\d{1,3}\(\d{3}\)\d{3}-\d{4}|)$/, "Invalid Phone Number"),
    favoriteColor: yup
    .string()
    .required('Favorite color is required')
    .oneOf(favoriteColors, 'Invalid color')
});

export {loginSchema, profileSchema};