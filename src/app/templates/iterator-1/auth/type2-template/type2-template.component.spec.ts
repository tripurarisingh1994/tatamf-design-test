import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Type2TemplateComponent } from './type2-template.component';

describe('Type2TemplateComponent', () => {
  let component: Type2TemplateComponent;
  let fixture: ComponentFixture<Type2TemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Type2TemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Type2TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
