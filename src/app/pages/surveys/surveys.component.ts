import { ChangeDetectorRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { SurevyService } from 'src/app/core/services/surevy.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent {
  showMobilePanel = false

  rows: any[] = [];
  selected = [];
  categories:any[] = [
    "simple",
    "rating",
    /* "response", */
    "satisfaction"
  ]
 
  bsModalRef: BsModalRef;

  constructor(
    private surveyService:SurevyService,
    private cdr: ChangeDetectorRef,
    private modalService: BsModalService,
    private translateService: TranslateService,
    private toastr: ToastrService,
  ) { 
  }

  ngOnInit(): void {
    this.getAllSurveys()
  }

  getAllSurveys(){
    this.surveyService.allSurveys().subscribe(
      (data:any)=>{
        this.rows = data
        this.cdr.markForCheck()
      }
    )
    console.log(this.rows);
    
    this.cdr.detectChanges()
  }

  deleteSurvey(data:any) {

   /* this.translateService.get('SURVEY.DELETE.LABEL').subscribe((translations) => {
      this.bsModalRef = this.modalService.show(ConfirmModalComponent, {
        initialState: {
          title: translations.title,
          message: translations.message,
          button: {
            cancel: translations.button.cancel,
            confirm: translations.button.confirm
          }
        }
      });
    });

    this.bsModalRef.content.onClose.subscribe(result => {
      if (result) {
        this.surveyService.deleteSurvey(data.id).subscribe(
          (data: any) => {
            this.translateService.get('SURVEY.DELETE.TOAST.DELETED_SUCCESSFULLY').subscribe((translatedMessage: string) => {this.toastr.success(translatedMessage); });
            this.getAllSurveys()
          }
        )

      }
    })

    /* this.bsModalRef = this.modalService.show(ConfirmModalComponent, {
      initialState: {
        title: 'Vous étes sur ?',
        message: 'Vous étes sur de vouloir supprime ce sondage ?',
        button: { cancel: 'Cancel', confirm: 'confirm' },
      }
    })

    this.bsModalRef.content.onClose.subscribe(result => {
      if (result) {

        this.surveyService.deleteSurvey(data.id).subscribe(
          (data: any) => {
            this.getAllSurveys()
          }
        )

      }
    }) */
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  getAnswerCount(value:number, results:any[]) {
    return results.filter((val) => val.answer === value).length
  }

  onActivate(event) {
  }

  onNameChange(event: any) {
   /* let val = event.target.value
    if (val) {
      this.surveyResource.title = val;
    } else {
      this.surveyResource.title = '';
    }
    this.surveyResource.skip = 0;
    this.getAllSurveys(this.surveyResource);*/
  }

  onCategoryChange(event: any) {
    /*if (event) {
      this.surveyResource.type = event;
    } else {
      this.surveyResource.type = '';
    }
    this.surveyResource.skip = 0;
    this.getAllSurveys(this.surveyResource);*/
  }

  onDateChange(event: any) {
    /*if (event) {
      this.surveyResource.createdAt = new Date(event).toDateString();
    } else {
      this.surveyResource.createdAt = '';
    }
    this.surveyResource.skip = 0;
    this.getAllSurveys(this.surveyResource);*/
  }

}
