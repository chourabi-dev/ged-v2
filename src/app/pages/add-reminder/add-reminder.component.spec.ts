import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReminderComponent } from './add-reminder.component';

describe('AddReminderComponent', () => {
  let component: AddReminderComponent;
  let fixture: ComponentFixture<AddReminderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddReminderComponent]
    });
    fixture = TestBed.createComponent(AddReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
