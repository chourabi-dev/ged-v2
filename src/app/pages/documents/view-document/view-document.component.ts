import { HttpEventType } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.scss']
})
export class ViewDocumentComponent {

  id;
  document = null;
  imageUrl;



  constructor(private route:ActivatedRoute,private api:ApiService,private cdr: ChangeDetectorRef,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

   const data = this.route.snapshot.params;

   
   this.document = {
    categoryId : data.categoryId ,
    categoryName: data.categoryName ,
    createdByName: data.createdByName ,
    createdDate: data.createdDate ,
    description: data.description ,
    id: data.id ,
    name: data.name ,
    url: environment.API+'/'+data.url ,
    
   }
   
   console.log(this.document);
   this.cdr.detectChanges();

   this.getDocumentDATA();
  }


  

  getDocumentDATA(){
 
    const version = this.document.name == null ? true : false;
  
    
    this.api.downloadFILE(this.id, version)
      .pipe(
        delay(500)
      )
      .subscribe(data => {
        
        if (data.type === HttpEventType.Response) {
          const imgageFile = new Blob([data.body], { type: data.body.type });
          this.imageUrl = URL.createObjectURL(imgageFile)
         
          
          this.cdr.detectChanges();
        }
      }, (err) => {
        
        
      })

  }
}
