import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.page.html',
  styleUrls: ['./lista-contatos.page.scss'],
})

export class ListaContatosPage implements OnInit {
  data: any;
  constructor(private http: HttpClient) {  }

  getDados() {
   // return this.http.get(`http://www.gt2a.com.br/pos-graduacao/lucas/usuario.json`);
   return this.http.get(`http://www.gt2a.com.br/pos-graduacao/lucas/lista-professor.json`);
  }
  abredetalhe(professor) {
    console.log('lucas',professor);
  }
  ngOnInit() {
    this.getDados()
    .subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }
}
