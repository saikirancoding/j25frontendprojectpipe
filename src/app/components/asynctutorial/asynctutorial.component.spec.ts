import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynctutorialComponent } from './asynctutorial.component';

describe('AsynctutorialComponent', () => {
  let component: AsynctutorialComponent;
  let fixture: ComponentFixture<AsynctutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynctutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynctutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
