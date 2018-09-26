import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContatosDetalhePage } from './lista-contatos-detalhe.page';

describe('ListaContatosDetalhePage', () => {
  let component: ListaContatosDetalhePage;
  let fixture: ComponentFixture<ListaContatosDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaContatosDetalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContatosDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
