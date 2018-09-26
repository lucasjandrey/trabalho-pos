import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../service/professores.service';

@Component({
  selector: 'app-lista-contatos-detalhe',
  templateUrl: './lista-contatos-detalhe.page.html',
  styleUrls: ['./lista-contatos-detalhe.page.scss'],
})
export class ListaContatosDetalhePage implements OnInit {
  professor: any;
  
  constructor(private professorService: ProfessoresService) { }
  
  ngOnInit() {
    this.professor = this.professorService.professor;
  }
  
}
