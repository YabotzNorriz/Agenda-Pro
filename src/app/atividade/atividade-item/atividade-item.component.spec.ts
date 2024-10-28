import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeItemComponent } from './atividade-item.component';

describe('AtividadeItemComponent', () => {
  let component: AtividadeItemComponent;
  let fixture: ComponentFixture<AtividadeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadeItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtividadeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
