import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pst-form',
  templateUrl: './pst-form.component.html',
})
export class PstFormComponent {
  form: FormGroup = new FormGroup({
    password: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        // Validators.pattern(),
      ])
    ),
  });

  onSubmit(value: any) {
    console.log(value);
  }
}
