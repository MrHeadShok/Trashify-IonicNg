import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(
    private navCtrl: NavController,
    private authService: AuthentificationService
  ) {}

  logout() {
    this.authService
      .logoutUser()
      .then((res) => {
        console.log(res);
        this.navCtrl.navigateBack('login');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
