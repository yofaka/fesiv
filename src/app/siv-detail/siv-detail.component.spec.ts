import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SivDetailComponent } from './siv-detail.component';

describe('SivDetailComponent', () => {
  let component: SivDetailComponent;
  let fixture: ComponentFixture<SivDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SivDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SivDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
