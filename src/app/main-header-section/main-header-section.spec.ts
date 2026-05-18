import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderSection } from './main-header-section';

describe('MainHeaderSection', () => {
  let component: MainHeaderSection;
  let fixture: ComponentFixture<MainHeaderSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHeaderSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeaderSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
