import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContatosPage } from './editar-contatos.page';

describe('EditarContatosPage', () => {
  let component: EditarContatosPage;
  let fixture: ComponentFixture<EditarContatosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarContatosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarContatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
