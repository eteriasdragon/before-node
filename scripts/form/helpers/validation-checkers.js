export function validateFirstName(text) {
  if (!text) return "First name cannot be empty";

  if (!/^[A-Za-z]*$/.test(text)) {
    return "First name must contain only latin letters";
  }

  if (!/^[A-Z]/.test(text)) {
    return "First name must starts from uppercase letter";
  }

  if (!/^[A-Za-z\s]*$/.test(text.trim())) {
    return "First name cannot contain any symbols";
  }
  return false;
}

export function validateLastName(text) {
  if (!text) return "Last name cannot be empty";

  if (!/^[A-Za-z]*$/.test(text)) {
    return "Last name must contain only latin letters";
  }

  if (!/^[A-Z]/.test(text)) {
    return "Last name must starts from uppercase letter";
  }

  if (!/^[A-Za-z\s]*$/.test(text.trim())) {
    return "Last name cannot contain any symbols";
  }
  return false;
}

export function validateEmail(text) {
  if (!text) return "Email cannot be empty";
  const validationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return validationRegex.test(text.trim()) ? false : "Invalid email format";
}