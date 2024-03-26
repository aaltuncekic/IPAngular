import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerilerComponent } from './veriler.component';

describe('VerilerComponent', () => {
  let component: VerilerComponent;
  let fixture: ComponentFixture<VerilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerilerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
