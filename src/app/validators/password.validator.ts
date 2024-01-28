import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;

    if (!value) {
      // If the value is empty, consider it valid. You may adjust this based on your requirements.
      return null;
    }

    // Check for symbols using a regular expression.
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!symbolRegex.test(value)) {
      return { password: true, message: 'Password must contain at least one symbol' };
    }
    // If all checks pass, consider it valid.
    return null
  };
}
