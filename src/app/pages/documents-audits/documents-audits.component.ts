import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-documents-audits',
  templateUrl: './documents-audits.component.html',
  styleUrls: ['./documents-audits.component.scss']
})
export class DocumentsAuditsComponent {

  

  loading:boolean = false;
  audits:any[] = [];

  users:any[] = [];

  
  categories:any[] = []; 

  form = new FormGroup({
    name: new FormControl(''), 
    categoryId: new FormControl(''), 
    createdBy: new FormControl(''), 
    
  })



  constructor(private api:ApiService, private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.getData();
    this.getUsers()
  }


  getUsers(){
    this.api.getUserDropDown().toPromise().then((res:any[])=>{
      this.users = res;
      this.cdr.detectChanges();

      console.log(this.users);
      
    })
  }





  relaod(){
    this.loading = true;
    this.cdr.detectChanges();


    const body = this.form.value;


    this.loading = true;
   

  this.api.getDocumentAudit(body.categoryId,body.name,body.createdBy).toPromise().then((res:any)=>{
     
    this.audits = res;

    console.log(this.audits);
    
    
    
  }).catch((err)=>{
    
  }).finally(()=>{
    this.loading = false;
    this.cdr.detectChanges();
  })


  }




  groupByParentId(items:any[]) { 
    let parents = []; 
    items.map((p)=>{
      if (p.parentId == null) {
        parents.push(p);
      }
    }) 
    parents.map((p)=>{
      items.map((i)=>{
        if (i.parentId == p.id) { 
          if (p.children != null) {
            p.children.push(i)
          }else{
            p.children = [i]
          }
  
        }
      })
    }) 
    parents.map((p)=>{
      if (p.children == null) {
        p.children = [];
      } 
    }) 
    return parents;
  }


  getData(){
    this.loading = true;

    this.api.getDocumentCategories().toPromise().then((res:any)=>{
      this.categories = res;

      console.log( this.groupByParentId(this.categories) );
      

    })



    this.cdr.detectChanges();

  this.api.getDocumentAudit('','','').toPromise().then((res:any)=>{
     
    this.audits = res;

    console.log(this.audits);
    
    
    
  }).catch((err)=>{
    
  }).finally(()=>{
    this.loading = false;
    this.cdr.detectChanges();
  })
  }
}
