import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    const name = 'JOHN DOE';
    const minPassLength = 4;
    this.formGroup = this.formBuilder.group({
      // registeredOn: today,
      // name: [name.toLowerCase(), Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(minPassLength),
          this.validatePassword,
        ],
      ],
    });
  }

  private validateCamposcontrol(control: AbstractControl) {
    let error = 'campo requerido';
    return error;
  }

  private validatePassword(control: AbstractControl) {
    const password = control.value;
    let error = null;
    if (!password.includes('$')) {
      error = { dollar: 'simbolo de Dollar' };
    }
    if (!parseFloat(password[0])) {
      error = { number: 'debe de comenzar con un numero' };
    }
    return error;
  }

  public register() {
    const user = this.formGroup.value;
    console.log(user);
  }

  validation_messages = [
    { type: 'required', message: 'Username is required.' },
    {
      type: 'minlength',
      message: 'Username must be at least 4 characters long.',
    },
    {
      type: 'maxlength',
      message: 'Username cannot be more than 25 characters long.',
    },
    {
      type: 'pattern',
      message: 'Your username must contain only numbers and letters.',
    },
    { type: 'validUsername', message: 'Your username has already been taken.' },

    { type: 'number', message: 'debe de comenzar con un numero.' },
    { type: 'dollar', message: 'simbolo de Dollar.' },
    { type: 'email', message: 'email invalido.' },
  ];

  public getError(controlName: string): string {
    let error = '';

    const control = this.formGroup.get(controlName);
    // console.log(control);

    for (let index = 0; index < this.validation_messages.length; index++) {
      const element = this.validation_messages[index];
      // control?.touched && control.errors != null

      if (
        control?.hasError(this.validation_messages[index].type) &&
        (control.dirty || control.touched)
      ) {
        // console.log(control.errors);
        error = this.validation_messages[index].message;
        // console.log(JSON.stringify(control.errors));

        // error = JSON.stringify(control.errors);
      }

      //   ng-container *ngFor="let validation of validation_messages.username">
      // <div class="error-message" *ngIf="validations_form.get('username').hasError(validation.type) && (validations_form.get('username').dirty || validations_form.get('username').touched)">
      //   {{ validation.message }}
      // </div>
    }
    return error;
  }
}
