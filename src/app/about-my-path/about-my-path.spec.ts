import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyPath } from './about-my-path';

describe('AboutMyPath', () => {
  let component: AboutMyPath;
  let fixture: ComponentFixture<AboutMyPath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMyPath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMyPath);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
