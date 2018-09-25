import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.page.html',
  styleUrls: ['./lista-contatos.page.scss'],
})

export class ListaContatosPage implements OnInit {
  data: any;
  constructor(private http: HttpClient) { }
  getDados() {
    return this.http.get(`https://my-json-server.typicode.com/typicode/demo/profile`);
  }
  ngOnInit() {
    this.getDados()
    .subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }
}
