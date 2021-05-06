import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(
    private navCtrl: NavController,
    private authService: AuthentificationService,
    private formBuilder: FormBuilder
  ) {}

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
    });
  }

  validation_messages = {
    email: [
      { type: 'required', message: 'Champs Email est obligatoire.' },
      { type: 'pattern', message: 'Veuillez introduire votre email.' },
    ],
    password: [
      { type: 'required', message: 'Champs Mot de passe est obligatoire.' },
      {
        type: 'minlength',
        message: 'Mot de passe doit avoir 5 lettres/chiffres au mois.',
      },
    ],
  };

  navigateToSignupPage() {
    this.navCtrl.navigateForward('/signup');
  }

  login(value) {
    console.log('button clicked');
    this.authService.loginUser(value).then(
      (res) => {
        console.log(res);
        this.errorMessage = '';
        this.navCtrl.navigateForward('/tabs/tab1');
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }
}
