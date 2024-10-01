import { ChangeDetectorRef, Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  id;

  comments:any[] = [];  


  modalRef: BsModalRef;

 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  


  loading:boolean = false;
  serverIP:any= environment.API;

  form = new FormGroup({
    comment: new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, private route:ActivatedRoute, private cdr: ChangeDetectorRef, private router:Router,private modalService:BsModalService) {  
    
  } 

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.getData();
 
  }

  

  

  getData(){
    
    this.loading = true;
    
    this.cdr.detectChanges();

    this.api.getDocumentComments(this.id).toPromise().then((res:any)=>{
      this.comments = res;

      console.log(this.comments);
      
 

    }).catch( (err)=>{

      console.log(err);
      
    }).finally(()=>{ 
      this.loading = false;
      this.cdr.detectChanges();
    })
  }



 



  toDeleteID;

  deleteComment(template,id){
    this.toDeleteID = id;
    this.openModal(template);
  }

  confirmAndDelete(){
    this.modalRef.hide();
    this.api.deleteComment(this.toDeleteID).toPromise().then((res:any)=>{
      this.getData();
    })
  }


  save(){
    this.loading = true;
    this.form.reset();
    
    this.cdr.detectChanges();
    
    const comment = {
      comment: this.form.value.comment,
      documentId: this.id
    }


    this.api.addNewDocumentComment(comment).toPromise().then((res)=>{
      this.getData();
      this.loading = false;
      this.cdr.detectChanges();
    
    })
  }
}
