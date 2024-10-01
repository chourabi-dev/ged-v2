import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSmtpComponent } from './edit-smtp.component';

describe('EditSmtpComponent', () => {
  let component: EditSmtpComponent;
  let fixture: ComponentFixture<EditSmtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSmtpComponent]
    });
    fixture = TestBed.createComponent(EditSmtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
