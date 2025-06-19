import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRevisaoComponent } from './form-revisao.component';

describe('FormRevisaoComponent', () => {
  let component: FormRevisaoComponent;
  let fixture: ComponentFixture<FormRevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRevisaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
