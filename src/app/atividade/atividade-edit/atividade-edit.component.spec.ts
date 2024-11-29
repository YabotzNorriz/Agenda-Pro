import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeEditComponent } from './atividade-edit.component';

describe('AtividadeEditComponent', () => {
  let component: AtividadeEditComponent;
  let fixture: ComponentFixture<AtividadeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadeEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
