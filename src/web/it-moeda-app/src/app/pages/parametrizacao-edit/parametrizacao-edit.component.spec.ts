import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizacaoEditComponent } from './parametrizacao-edit.component';

describe('ParametrizacaoEditComponent', () => {
  let component: ParametrizacaoEditComponent;
  let fixture: ComponentFixture<ParametrizacaoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrizacaoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrizacaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
