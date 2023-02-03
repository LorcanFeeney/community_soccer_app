import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFixturesComponent } from './live-fixtures.component';

describe('LiveFixturesComponent', () => {
  let component: LiveFixturesComponent;
  let fixture: ComponentFixture<LiveFixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveFixturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
