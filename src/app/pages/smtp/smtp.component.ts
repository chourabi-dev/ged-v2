import { ChangeDetectorRef, Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-smtp',
  templateUrl: './smtp.component.html',
  styleUrls: ['./smtp.component.scss']
})
export class SmtpComponent {

  loading:boolean = false;
  smtps:any[] = [];
  modalRef: BsModalRef;

 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  



  constructor(private api:ApiService, private cdr: ChangeDetectorRef,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getData();
  }

 

  getData(){
    this.loading = true;

      this.cdr.detectChanges();

    this.api.getSMTPSettingsList().toPromise().then((res:any)=>{
      this.smtps =  res;
      
      
    }).catch((err)=>{
      
    }).finally(()=>{
      this.loading = false;
      this.cdr.detectChanges();
    })
  }






  toDeleteID;

  deleteSMTP(template,id){
    this.toDeleteID = id;
    this.openModal(template);
  }

  confirmAndDelete(){
    this.modalRef.hide();
    this.api.deleteSMTP(this.toDeleteID).toPromise().then((res:any)=>{
      this.getData();
    })
  }
}
