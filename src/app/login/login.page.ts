import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessoresService } from '../service/professores.service';
import { AuthGuard } from '../auth.guard';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  data: any;
  usuario: any;
  senha: any;

  constructor(private router: Router,
              private requisicao: ProfessoresService,
              private authGuard: AuthGuard,
              public modalController: ModalController) { }

  async esqueceuSenha() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  validaLogin() {
    this.requisicao.getUrl(`http://www.gt2a.com.br/pos-graduacao/usuario.json`)
    .subscribe(data => {
      this.data = data;
      for (let val of this.data.users) {
        if ((val.user === this.usuario) && (val.password === this.senha)) {
          this.authGuard.authenticated = true;
          this.router.navigate(['/lista-contatos']);
          return;
        } else {
          this.authGuard.authenticated = false;
        }
      }
      if (!this.authGuard.authenticated){
        alert('Usuário ou Senha Incorretos');
      }

    });
  }
  acaoDaPage() {
    this.validaLogin();
  }
}
