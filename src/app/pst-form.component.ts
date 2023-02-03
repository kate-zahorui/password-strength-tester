import { Component, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pst-form',
  templateUrl: './pst-form.component.html',
  styleUrls: ['./pst-form.component.css'],
})
export class PstFormComponent {
  form = new FormGroup({
    password: new FormControl('', Validators.required),
  });
  passwordStrength = 'empty';
  isPswdShown = false;

  onBtnClick() {
    this.isPswdShown = !this.isPswdShown;
  }

  onSubmit(value: any) {
    if (!value) return;
    console.log(value);
  }

  validatePassword(value: string | null) {
    if (!value || value.trim().length === 0) {
      this.passwordStrength = 'empty';
      return;
    }
    if (value.trim().length < 8) {
      this.passwordStrength = 'small';
      return;
    }

    const onlyNumConstraint = new RegExp('^[0-9]+$'); // only numbers
    const isOnlyNum = onlyNumConstraint.test(value);

    const onlyLettersConstraint = new RegExp('^[a-zA-Z]+$'); // only letters
    const isOnlyLetters = onlyLettersConstraint.test(value);

    const onlySymbolsConstraint = new RegExp('^[^a-zA-Z0-9]+$'); // only symbols
    const isOnlySymbols = onlySymbolsConstraint.test(value);

    const isPasswordEasy = isOnlyNum || isOnlyLetters || isOnlySymbols;
    if (isPasswordEasy) {
      this.passwordStrength = 'easy';
      return;
    }

    const lettersAndNumConstraint = new RegExp(
      `^(?=.*?[0-9])(?=.*?[a-zA-Z])[a-zA-Z0-9]+$`
    ); // letters and numbers
    const isLettersAndNum = lettersAndNumConstraint.test(value);

    const lettersAndSymbolsConstraint = new RegExp(
      `^(?=.*[^a-zA-Z0-9])(?=.*?[a-zA-Z])[^0-9]+$`
    ); // letters and symbols
    const isLettersAndSymbols = lettersAndSymbolsConstraint.test(value);

    const numbersAndSymbolsConstraint = new RegExp(
      `^(?=.*[^a-zA-Z0-9])(?=.*?[0-9])[^a-zA-Z]+$`
    ); // numbers and symbols
    const isNumbersAndSymbols = numbersAndSymbolsConstraint.test(value);

    const isPasswordMedium =
      isLettersAndNum || isLettersAndSymbols || isNumbersAndSymbols;
    if (isPasswordMedium) {
      this.passwordStrength = 'medium';
      return;
    }

    this.passwordStrength = 'strong';
  }

  @HostListener('input') onInput() {
    const value = this.form.controls['password'].value;
    this.validatePassword(value);
  }
}
