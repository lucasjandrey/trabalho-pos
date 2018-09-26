import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessoresService } from '../service/professores.service';
import { AlertController } from '@ionic/angular';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  data: any;
  usuario: any;
  senha: any;
  constructor( private router: Router,private requisicao: ProfessoresService, public alertCtrl: AlertController, private authGuard: AuthGuard) { }
  
  validaLogin() {
    this.requisicao.getUrl(`http://www.gt2a.com.br/pos-graduacao/lucas/usuario.json`)
    .subscribe(data => {
      this.data = data;
      if ((this.data.usuario == this.usuario) && (this.data.senha == this.senha)){
        this.authGuard.authenticated = true;
        this.router.navigate(['/lista-contatos']);
      }else{
        this.authGuard.authenticated = false;
        console.log('usuário ou senha incorretos');
      }
    });
  }
}
