import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-login-audit',
  templateUrl: './login-audit.component.html',
  styleUrls: ['./login-audit.component.scss']
})
export class LoginAuditComponent {

  form = new FormGroup({
    name: new FormControl('',Validators.required)
  })

  loading:boolean = false;


  loginAudit:any[] = [];



  constructor(private api:ApiService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData();
  }

  relaod(){
    this.getData();
  }


  getData(){
    this.loading = true;
    
    this.cdr.detectChanges();

    this.api.getLoginAudit(this.form.value.name).toPromise().then((res:any)=>{
       
      this.loginAudit = res;
  
      console.log(this.loginAudit);
      
      
      
    }).catch((err)=>{
      
    }).finally(()=>{
      this.loading = false;
      this.cdr.detectChanges();
    })
  }

}
