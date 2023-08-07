import {validationRules} from "./helpers/validation-rules.js";
import {showCongrats} from "./congrats/animation.js";

const form = document.querySelector('.signup-section__form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const errorMessages = [];
  const valuesToSend = {};

  for (const fieldName in validationRules) {
    if (form.elements[fieldName]) {
      const fieldValue = form.elements[fieldName].value;
      const isNonValid = validationRules[fieldName](fieldValue);
      if (isNonValid) {
        errorMessages.push({field: fieldName, message: isNonValid});
      } else {
        const selector = `.${fieldName}Error`;
        form.querySelector(selector).innerText = "";
        valuesToSend[fieldName] = fieldValue;
      }
    }
  }

  if(!errorMessages.length) {
    localStorage.setItem('userData', JSON.stringify(valuesToSend));
    if(valuesToSend.firstName === "Sigma") {
      showCongrats();
    }
  } else {
    errorMessages.forEach(error => {
      const selector = `.${error.field}Error`;
      form.querySelector(selector).innerText = error.message;
    })
  }
})
