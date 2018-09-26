import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfessoresService } from '../service/professores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.page.html',
  styleUrls: ['./lista-contatos.page.scss'],
})

export class ListaContatosPage implements OnInit {
  data: any;
  constructor(private http: HttpClient, private professorService: ProfessoresService, private router : Router)  {  }

  abredetalhe(professor) {
    this.professorService.professor = professor;
    this.router.navigate(['/lista-contatos-detalhe']); 
  }

  ngOnInit() {
    this.professorService.getUrl(`http://www.gt2a.com.br/pos-graduacao/lucas/lista-professor.json`)
    .subscribe(data => {
      this.data = data;
    });
  }
}
