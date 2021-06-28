import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizacaoConsultaComponent } from './parametrizacao-consulta.component';

describe('ParametrizacaoConsultaComponent', () => {
  let component: ParametrizacaoConsultaComponent;
  let fixture: ComponentFixture<ParametrizacaoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrizacaoConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrizacaoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
