import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent {

  form = new FormGroup({ 
    name: new FormControl('' )
  })

  loading:boolean = false;
  success:string = '';
  error:string='';


  roles:any[] = [];
  actions:any[] = [];
  pages:any[] = [];


  pagesActionsList = [];


  oldSelectedActions:any[] = [];
  newSelectedActions:any[] = [];
  


  id;



  roleData:any = {};

  
  



  constructor(private router:Router, private api:ApiService,private cdr: ChangeDetectorRef, private route:ActivatedRoute) { }

  ngOnInit(): void {


    this.id = this.route.snapshot.params['id'];

    
    this.api.getRoleDetailsByID(this.id).toPromise().then((res:any)=>{
      // ("ROLE");

      // (res);


      this.roleData = res;
      this.form.setValue({
        name:res.name
      })
      

      this.oldSelectedActions = res.roleClaims;


      this.api.getPagesList().toPromise().then((res:any[])=>{
        this.pages = res;
         
       
        this.api.getActionsList().toPromise().then((res:any[])=>{
          this.actions = res; 
  
  
          this.pages.map((p)=>{
            if (p.children == null) {
              p.children = [];
  
              // search for actions
  
              this.actions.map((a)=>{
                if (a.pageId == p.id) {
                  p.children.push(a);
                }
              })
  
  
  
  
            }
  
          })
  
  
          // (this.pages);
          
          this.pagesActionsList = this.pages;
  
  
          this.cdr.detectChanges();
  
  
  
  
  
        })
  
  
  
  
  
      })
      
    })

    


    
    
  }

  save(){
    this.cdr.detectChanges();


    const body = this.form.value;


    

    let claimedRoles = [];


    console.log(this.oldSelectedActions);
    
    
    this.oldSelectedActions.map((a)=>{
      claimedRoles.push(a)
    })
 



    this.newSelectedActions.map((a)=>{
      claimedRoles.push({
        actionId: a.id,
        claimType: a.code,
        claimValue:'',
        roleId:this.id,
        id:a.id
      })
    })
 
 


    let role = {
      name:body.name,
      roleClaims:claimedRoles
    }
 
    this.loading = true;
    this.error='';
    this.success='';

    this.api.updateRole(role,this.id).toPromise().then((res:any)=>{
      
      this.router.navigateByUrl('/roles');
      
      this.form.reset();
    }).catch((err:HttpErrorResponse)=>{ 
      this.error=err.error.name[0];
    }).finally(()=>{
      this.loading = false;
      this.cdr.detectChanges();
    })

    

  }



  actionChange(action){
    let inserted = false;
    let searchIndex = 0;
    
    this.newSelectedActions.map((a,index)=>{
      if (action.id == a.id) {
        inserted = true;
        searchIndex = index;
      } 
    })

    if (inserted == false) {
      this.newSelectedActions.push(action);
    }else{
      this.newSelectedActions.splice(searchIndex,1) 
    }
 
    
    this.cdr.detectChanges();
    
  }




  checkAction(action){

    let checked = false;
    
    this.oldSelectedActions.map((a)=>{ 
      if( action.id == a.actionId ){
        checked = true;
      }
    })

    return checked;
  }

}
