import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { UsersService } from 'src/app/services/users.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface User {
  fullname: string;
  role: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  //SignInformcontrol
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  //userInfo
  userList = [];
  userData: User;

  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long.',
      },
    ],
  };

  constructor(
    public userservice: UsersService,
    private router: Router,
    private authService: AuthentificationService,
    private formBuilder: FormBuilder
  ) {
    this.userData = {} as User;
  }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(5), Validators.required])
      ),

      fullname: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z]+ +[a-zA-Z] +$')],
      ],
      role: ['', [Validators.required]],
    });
  }

  tryRegister(value) {
    this.authService.registerUser(value).then(
      (res) => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created. Please log in.';

        console.log(this.validations_form.value);
        this.userservice
          .createUser(this.validations_form.value)
          .then((resp) => {
            this.validations_form.reset();
            console.log('Register IDcheck');
          })
          .catch((error) => {
            console.log(error);
          });
        this.router.navigate(['login']);
      },
      (err) => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      }
    );
  }

  navigateToLoginPage() {
    this.router.navigate([`login`]);
  }
}
