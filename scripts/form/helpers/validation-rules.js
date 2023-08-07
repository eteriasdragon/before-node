import {validateEmail, validateFirstName, validateLastName} from "./validation-checkers.js";

export const validationRules = {
  firstName: validateFirstName,
  lastName: validateLastName,
  email: validateEmail,
};