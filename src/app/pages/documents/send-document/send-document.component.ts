import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-send-document',
  templateUrl: './send-document.component.html',
  styleUrls: ['./send-document.component.scss']
})
export class SendDocumentComponent {


  form = new FormGroup({
    to: new FormControl('',Validators.required),
    subject: new FormControl('',Validators.required),
    body: new FormControl('',Validators.required)
    
  })

  loading:boolean = false;
  success:string = '';
  error:string='';

  id;



  constructor(private router:Router, private api:ApiService,private cdr: ChangeDetectorRef, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

  save(){
    this.cdr.detectChanges();


    const body = this.form.value;

    const email = {
      documentId : this.id,
      email : this.form.value.to,
      message :this.form.value.body,
      subject :this.form.value.subject
    }

    this.loading = true;
    this.error='';
    this.success='';

    this.api.sendNewMail(email).toPromise().then((res:any)=>{
      console.log(res);
      
      this.success = 'MAIL_SENT';
      
       this.form.reset();
    }).catch((err:HttpErrorResponse)=>{ 
      this.error=err.error.name[0];
    }).finally(()=>{
      this.loading = false;
      this.cdr.detectChanges();
    })

    

  }

}
