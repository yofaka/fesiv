import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIVsComponent } from './sivs.component';

describe('SIVsComponent', () => {
  let component: SIVsComponent;
  let fixture: ComponentFixture<SIVsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SIVsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SIVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
