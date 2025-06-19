import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisaoComponent } from './revisao.component';

describe('RevisaoComponent', () => {
  let component: RevisaoComponent;
  let fixture: ComponentFixture<RevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
