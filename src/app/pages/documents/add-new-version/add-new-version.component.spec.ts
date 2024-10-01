import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVersionComponent } from './add-new-version.component';

describe('AddNewVersionComponent', () => {
  let component: AddNewVersionComponent;
  let fixture: ComponentFixture<AddNewVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewVersionComponent]
    });
    fixture = TestBed.createComponent(AddNewVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
