import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmtpComponent } from './add-smtp.component';

describe('AddSmtpComponent', () => {
  let component: AddSmtpComponent;
  let fixture: ComponentFixture<AddSmtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSmtpComponent]
    });
    fixture = TestBed.createComponent(AddSmtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
