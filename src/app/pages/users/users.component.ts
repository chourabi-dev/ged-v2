import { ChangeDetectorRef, Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  loading:boolean = false;
  users:any[] = []; 

  

  modalRef: BsModalRef;

 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }



  constructor(private api:ApiService, private cdr: ChangeDetectorRef,private modalService: BsModalService ) { }

  ngOnInit(): void {
    this.getData();
  } 
 



  getData(){
    this.loading = true;

      this.cdr.detectChanges();

    this.api.getListOfUsers().toPromise().then((res:any)=>{
      this.users =  res;

      console.log(this.users);
      
      
    }).catch((err)=>{
      
    }).finally(()=>{
      this.loading = false;
      this.cdr.detectChanges();
    })
  }



  toDeleteID;

  deleteUser(template,id){
    this.toDeleteID = id;
    this.openModal(template);
  }

  confirmAndDelete(){
    this.modalRef.hide();
    this.api.deleteUserByID(this.toDeleteID).toPromise().then((res:any)=>{
      this.getData();
    })
  }

 
}
