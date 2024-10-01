import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsAuditsComponent } from './documents-audits.component';

describe('DocumentsAuditsComponent', () => {
  let component: DocumentsAuditsComponent;
  let fixture: ComponentFixture<DocumentsAuditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsAuditsComponent]
    });
    fixture = TestBed.createComponent(DocumentsAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
