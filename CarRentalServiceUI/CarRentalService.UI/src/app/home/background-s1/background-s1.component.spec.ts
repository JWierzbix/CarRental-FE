import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundS1Component } from './background-s1.component';

describe('BackgroundS1Component', () => {
  let component: BackgroundS1Component;
  let fixture: ComponentFixture<BackgroundS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
