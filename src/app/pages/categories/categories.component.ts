import { ChangeDetectorRef, Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  loading:boolean = false;
  categories:any[] = [];
  modalRef: BsModalRef;

 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  



  constructor(private api:ApiService, private cdr: ChangeDetectorRef,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getData();
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

      this.cdr.detectChanges();

    this.api.getDocumentCategories().toPromise().then((res:any)=>{
      this.categories =  this.groupByParentId(res);

      console.log(this.categories);
      
      
    }).catch((err)=>{
      
    }).finally(()=>{
      this.loading = false;
      this.cdr.detectChanges();
    })
  }






  toDeleteID;

  deleteCategory(template,id){
    this.toDeleteID = id;
    this.openModal(template);
  }

  confirmAndDelete(){
    this.modalRef.hide();
    this.api.deleteCategory(this.toDeleteID).toPromise().then((res:any)=>{
      this.getData();
    })
  }
}
