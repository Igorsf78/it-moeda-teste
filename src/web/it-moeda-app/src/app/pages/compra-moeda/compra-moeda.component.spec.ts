import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraMoedaComponent } from './compra-moeda.component';

describe('CompraMoedaComponent', () => {
  let component: CompraMoedaComponent;
  let fixture: ComponentFixture<CompraMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraMoedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
