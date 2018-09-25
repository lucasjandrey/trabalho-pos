import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContatosPage } from './lista-contatos.page';

describe('ListaContatosPage', () => {
  let component: ListaContatosPage;
  let fixture: ComponentFixture<ListaContatosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaContatosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
