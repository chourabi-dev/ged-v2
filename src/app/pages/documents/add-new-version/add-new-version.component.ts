import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-add-new-version',
  templateUrl: './add-new-version.component.html',
  styleUrls: ['./add-new-version.component.scss']
})
export class AddNewVersionComponent {


  id;
  document = null;
  fileData:any; 
  documentMetaDatas:any[]=[];
  
  
  
  form = new FormGroup({
    file: new FormControl('',Validators.required)
  })
 
  
  error:string='';
  success:string='';
  
  
  loading:boolean = false;
 
  
  constructor(private route:ActivatedRoute,private api:ApiService,private cdr: ChangeDetectorRef) { }
  
  
 
  
  ngOnInit(): void {
  
    this.id  = this.route.snapshot.params.id; 
  
   
  } 
  
  
  
  save(){
    this.cdr.detectChanges();
  
  
    const body = this.form.value;
   
  
    const document = {
      fileData:  this.fileData,
      id: this.id
    }
  
   
  
    this.loading = true;
    this.error='';
    this.success='';
  
    this.api.uploadNewDocumentVersion(document).toPromise().then((res:any)=>{
      console.log(res);
      
      this.success = 'DOCUMENT_ADDED';
  
      
      
    }).catch((err:HttpErrorResponse)=>{ 
      this.error=err.error.name[0];
    }).finally(()=>{
      this.loading = false;
      this.cdr.detectChanges();
    })
  
    
  
  }
  
  
  upload(files) {
    if (files.length === 0) return; 
  
    this.fileData = files[0]; 
  }
}
