import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalwindow } from './modalwindow';

describe('Modalwindow', () => {
  let component: Modalwindow;
  let fixture: ComponentFixture<Modalwindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modalwindow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modalwindow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
