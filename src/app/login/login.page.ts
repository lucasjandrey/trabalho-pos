import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessoresService } from '../service/professores.service';
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
  constructor( private router: Router,private requisicao: ProfessoresService, private authGuard: AuthGuard) { }

  validaLogin() {
    this.requisicao.getUrl(`http://www.gt2a.com.br/pos-graduacao/usuario.json`)
    .subscribe(data => {
      this.data = data;
      for (let val of this.data.users){
        if ((val.user === this.usuario) && (val.password === this.senha)){
          this.authGuard.authenticated = true
          this.router.navigate(['/lista-contatos']);
          break;
        }else{
          this.authGuard.authenticated = false;
          alert('Usuário ou Senha Incorretos');
        }
      };
    });
  }
}
