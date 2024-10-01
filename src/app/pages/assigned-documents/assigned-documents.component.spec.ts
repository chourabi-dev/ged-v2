import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedDocumentsComponent } from './assigned-documents.component';

describe('AssignedDocumentsComponent', () => {
  let component: AssignedDocumentsComponent;
  let fixture: ComponentFixture<AssignedDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignedDocumentsComponent]
    });
    fixture = TestBed.createComponent(AssignedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
