import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgjButtonComponent } from './lgj-button.component';

describe('LgjButtonComponent', () => {
  let component: LgjButtonComponent;
  let fixture: ComponentFixture<LgjButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgjButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgjButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
