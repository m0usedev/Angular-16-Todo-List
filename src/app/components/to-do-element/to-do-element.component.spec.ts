import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoElementComponent } from './to-do-element.component';

describe('ToDoElementComponent', () => {
  let component: ToDoElementComponent;
  let fixture: ComponentFixture<ToDoElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoElementComponent]
    });
    fixture = TestBed.createComponent(ToDoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
