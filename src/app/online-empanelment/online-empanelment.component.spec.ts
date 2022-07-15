import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineEmpanelmentComponent } from './online-empanelment.component';

describe('OnlineEmpanelmentComponent', () => {
  let component: OnlineEmpanelmentComponent;
  let fixture: ComponentFixture<OnlineEmpanelmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineEmpanelmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineEmpanelmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
