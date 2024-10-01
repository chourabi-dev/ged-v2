import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SurevyService } from 'src/app/core/services/surevy.service';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.scss']
})
export class AddSurveyComponent {
  
  /*
  blog
: 
true
forum
: 
true
private
: 
true
title
: 
"ping"
type
: 
"simple"
users
: 
[]
  */









surveyForm: FormGroup;
surveyType = [
  "simple",
  "rating",
  /* "response", */
  "satisfaction"
]

constructor(
  private fb: FormBuilder,
  private cdr: ChangeDetectorRef,
  private router: Router,
  private surveyService: SurevyService,
) { }

ngOnInit(): void {
  this.createSurveyForm()
}

createSurveyForm() {
  this.surveyForm = this.fb.group({
    title: ['', [Validators.required]],
    type: ['', [Validators.required]],
    users: [[]],
    private: [false],
    blog: [true, [Validators.required]],
    forum: [true, [Validators.required]],
  });
}

saveSurvey() {

  if (this.surveyForm.valid) {

    this.surveyService.addSurvey(this.surveyForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.router.navigate(['/dashboard/surveys'])
      }
    )
  } else {
    this.surveyForm.markAllAsTouched();
  }
}

}
