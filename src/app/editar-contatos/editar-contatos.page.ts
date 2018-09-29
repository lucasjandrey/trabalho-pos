import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessoresService } from '../service/professores.service';

@Component({
  selector: 'app-editar-contatos',
  templateUrl: './editar-contatos.page.html',
  styleUrls: ['./editar-contatos.page.scss'],
})
export class EditarContatosPage implements OnInit {
  data: any;
  constructor(private router: Router, private professor: ProfessoresService) { }

  ngOnInit() {
    this.data = this.professor.professor;
  }

}
