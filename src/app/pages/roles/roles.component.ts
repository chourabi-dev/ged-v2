import { ChangeDetectorRef, Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {

  roles:any[] = [];
  loading:boolean = false;

  modalRef: BsModalRef;

 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  constructor(private modalService: BsModalService, private api:ApiService,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData();
  }


  getData(){
    this.loading = true;

      this.cdr.detectChanges();

    this.api.getRolesList().toPromise().then((res:any)=>{

      console.log(res);
      
      this.roles =  res;
 
      
    }).catch((err)=>{
      
    }).finally(()=>{
      this.loading = false;
      this.cdr.detectChanges();
    })
  }

 


  toDeleteID;

  deleteRole(template,id){
    this.toDeleteID = id;
    this.openModal(template);
  }

  confirmAndDelete(){
    this.modalRef.hide();
    this.api.deleteRole(this.toDeleteID).toPromise().then((res:any)=>{
      this.getData();
    })
  }
}
