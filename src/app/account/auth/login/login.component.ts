import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {
  private currentUserSubject: BehaviorSubject<User>;

  loginForm: UntypedFormGroup;
  submitted:any = false;
  error:any = '';
  returnUrl: string;
  loading:boolean = false;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService) { 
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.loading = true;
    this.submitted = true;
    this.error=''; 
    
    if (this.loginForm.invalid) {
      return;
    } else {
      this.loading = true;

      this.authFackservice.loginx(this.f.email.value, this.f.password.value).toPromise().then((res:any)=>{
        console.log(res);
        const token = res.authorisation.token;
        const tokenTYPE = res.authorisation.type;
        const claims = res.claims;
        const user = res.user;
        localStorage.setItem("token",token);
        localStorage.setItem("tokenTYPE",tokenTYPE);
        localStorage.setItem("claims",claims.toString());
        localStorage.setItem("user",JSON.stringify(user));
        
        this.router.navigate(['/dashboard']); 
        this.currentUserSubject.next(user);
        
        
        
        
      }).catch((err)=>{
        this.error = "Unauthorized";
        
      }) .finally(()=>{
        this.loading = false;
      })
    }
  }
}
