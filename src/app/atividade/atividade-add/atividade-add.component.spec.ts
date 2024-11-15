import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeAddComponent } from './atividade-add.component';

describe('AtividadeAddComponent', () => {
  let component: AtividadeAddComponent;
  let fixture: ComponentFixture<AtividadeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadeAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
