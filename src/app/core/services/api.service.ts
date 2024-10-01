import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }

  getListOfDocuments(searchQuery?:string,date?:string,category?:string,name?:string,tags?:string){
    const URL =environment.API+'/api/documents?fields=&orderBy=createdDate%20desc&createDateString='+date+'&pageSize=100&skip=0&searchQuery='+searchQuery+'&categoryId='+category+'&name='+name+'&metaTags='+tags+'&id=';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));
  
      return this.http.get(URL,{
        headers: headers
      })
    
  }

  getDocumentCategories(){
    const URL =environment.API+'/api/category/dropdown';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));
  
      return this.http.get(URL,{
        headers: headers
      })
  }



  addNewCategory(body){
    const URL =environment.API+'/api/category';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));
  
      return this.http.post(URL,body,{
        headers: headers
      })
  }

  updateCategory(body,id){
    const URL =environment.API+'/api/category/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));
  
      return this.http.put(URL,body,{
        headers: headers
      })
  }


  deleteCategory(id){
    const URL =environment.API+'/api/category/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));
  
      return this.http.delete(URL,{
        headers: headers
      })
  }





 

  getDocumentAudit(categoryId?,name?,createdBy?){ 
    const URL =environment.API+'/api/documentAuditTrail?fields=&orderBy=createdDate%20desc&pageSize=100&skip=0&searchQuery=&categoryId='+categoryId+'&name='+name+'&id=&createdBy='+createdBy;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));
  
      return this.http.get(URL,{
        headers: headers
      }) 
  }
  


  getUserDropDown(){ 
    const URL =environment.API+'/api/user-dropdown';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));
  
      return this.http.get(URL,{
        headers: headers
      }) 
  }



  getRolesList(){
    
    const URL =environment.API+'/api/role';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 

  }



  getActionsList(){ 
    const URL =environment.API+'/api/actions';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }

  
  getPagesList(){ 
    const URL =environment.API+'/api/pages';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }


  addNewRole(role){
   
    const URL =environment.API+'/api/role';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));
  
      return this.http.post(URL,role,{
        headers: headers
      })
  }


  updateRole(role,id){
   
    const URL =environment.API+'/api/role/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));
  
      return this.http.put(URL,role,{
        headers: headers
      })
  }



  deleteRole(id){ 

      const URL =environment.API+'/api/role/'+id;

      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));
  
        return this.http.delete(URL,{
          headers: headers
        }) 
  }

  getRoleDetailsByID(id){
    
    const URL =environment.API+'/api/role/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }



  getListOfUsers(){
     
    const URL =environment.API+'/api/user';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }

  addNewUser(body){
     
    const URL =environment.API+'/api/user';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.post(URL,body,{
        headers: headers
      }) 
  }



  getUserById(id){
    const URL =environment.API+'/api/user/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }




  updateUser(body,id){
    const URL =environment.API+'/api/user/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.put(URL,body,{
        headers: headers
      }) 
  }

 

  resetUserPassword(body){
     
    const URL =environment.API+'/api/user/resetpassword';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.post(URL,body,{
        headers: headers
      }) 
  }
  

  deleteUserByID(id){ 
    const URL =environment.API+'/api/user/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.delete(URL,{
        headers: headers
      }) 
  }



  getLoginAudit(username){ 
    const URL =environment.API+'/api/loginAudit?fields=&orderBy=loginTime%20desc&pageSize=1000000&skip=0&searchQuery=&id=&userName='+username;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }


  getlanguages(){ 
    const URL =environment.API+'/api/languages';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }


  deleteLanguage(id){
    const URL =environment.API+'/api/languages/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.delete(URL,{
        headers: headers
      }) 
  }



 

  createSMTP(body){
     
    const URL =environment.API+'/api/emailSMTPSetting';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.post(URL,body,{
        headers: headers
      }) 
  }
  

  getSMTPSettingsList(){
    
    const URL =environment.API+'/api/emailSMTPSetting';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }



  updateSMTP(body,id){
         
    const URL =environment.API+'/api/emailSMTPSetting/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.put(URL,body,{
        headers: headers
      }) 
  }

  deleteSMTP(id){
    const URL =environment.API+'/api/emailSMTPSetting/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.delete(URL,{
        headers: headers
      }) 
  }



  getCompanyProfile(){
    const URL =environment.API+'/api/companyProfile';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }



  downloadFILE(documentId,isVersion = false){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));
    
    const url = environment.API+`/api/document/${documentId}/download/${isVersion} `;
    return this.http.get(url, {
      headers: headers,
      reportProgress: true,
      observe: 'events',
      responseType: 'blob',
    });
  }




  updateDocumentInformations(body,id){
    

    const URL =environment.API+'/api/document/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.put(URL,body,{
        headers: headers
      }) 

  }




  getDocumentMetaTags(id){ 
    const URL =environment.API+'/api/document/'+id+'/getMetatag';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
    
  }


  getDocumentHistory(id){ 
    const URL =environment.API+'/api/documentversion/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
    
  }
 


  restoreDocumentVersion(docID, versionID){
    

    const URL =environment.API+`/api/documentversion/${docID}/restore/${versionID}`;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.post(URL,{},{
        headers: headers
      }) 
  }




  addNewDocument(document:any){
     
    let formData = new FormData();


    formData.append('uploadFile', document.fileData);
    formData.append('name', document.name);
    formData.append('categoryId', document.categoryId);
    formData.append('categoryName', document.categoryName);
    formData.append('description', document.description);
    
    
    formData.append(
      'documentMetaDatas',
      JSON.stringify(document.documentMetaDatas)
    );
    formData.append(
      'documentRolePermissions',
      JSON.stringify(document.documentRolePermissions ?? [])
    );

    formData.append(
      'documentUserPermissions',
      JSON.stringify(document.documentUserPermissions ?? [])
    );

    const headers= new HttpHeaders()
    
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));


    console.log(formData.get('name'));
    

    const URL =environment.API+`/api/document`;

      return this.http.post(URL,formData,{
        headers: headers
      }) 
      
  }




  uploadNewDocumentVersion(document){
    
    let formData = new FormData();

    formData.append('uploadFile', document.fileData);
    formData.append('documentId', document.id);


    const headers= new HttpHeaders()
    
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));


    console.log(formData.get('name'));
    

    const URL =environment.API+`/api/documentversion`;

      return this.http.post(URL,formData,{
        headers: headers
      }) 
  }




  deleteDocument(id){
    
    const URL =environment.API+'/api/document/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.delete(URL,{
        headers: headers
      }) 
  }



  getDocumentComments(id){ 
    const URL =environment.API+'/api/documentComment/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
    
  }


  addNewDocumentComment(comment){
    
    const URL =environment.API+'/api/documentComment';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.post(URL,comment,{
        headers: headers
      }) 
  }


  deleteComment(id){
     
    const URL =environment.API+'/api/documentComment/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.delete(URL,{
        headers: headers
      }) 
  }





  getAssignedDocuments(categoryID='',documentName='',tags=''){ 
    const URL =environment.API+`/api/document/assignedDocuments?fields=&orderBy=createdDate%20desc&pageSize=100&skip=0&searchQuery=&categoryId=${categoryID}&name=${documentName}&metaTags=${tags}&id=`;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }


  documentRolePermission(id){
    
    const URL =environment.API+'/api/DocumentRolePermission/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }


  
  documentRolePermissionDelete(id){
    
    const URL =environment.API+'/api/documentUserPermission/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.delete(URL,{
        headers: headers
      }) 
  }


  addDocumentUserPermission(data){
    const URL =environment.API+'/api/documentUserPermission';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.post(URL,data,{
        headers: headers
      }) 
  }


  addDocumentRolePermission(data){
    const URL =environment.API+'/api/documentRolePermission';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.post(URL,data,{
        headers: headers
      }) 
  }


  
 

  
  

  sendNewMail(email){
    const URL =environment.API+'/api/email';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.post(URL,email,{
        headers: headers
      }) 
  }







  getAllReminders(subject="",message="",frequency=""){
    
    const URL =environment.API+`/api/reminder/all?fields=&orderBy=startDate%20desc&pageSize=15&skip=0&searchQuery=&subject=${subject}&message=${message}&frequency=${frequency}`;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }


  deleteReminder(id){
    
    const URL =environment.API+'/api/reminder/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.delete(URL,{
        headers: headers
      }) 
  }

  

  addNewReminder(data){ 
    const URL =environment.API+'/api/reminder';

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.post(URL,data,{
        headers: headers
      }) 
  }



  getReminderByID(id){
    
    const URL =environment.API+'/api/reminder/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }


  updateReminder(body,id){
        
    const URL =environment.API+'/api/reminder/'+id;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.put(URL,body,{
        headers: headers
      }) 
  }




  getOneTimeReminder(month,year){
    
    const URL =environment.API+`/api/dashboard/onetimereminder/${month}/${year}`;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }


  
  yearlyreminder(month,year){
    
    const URL =environment.API+`/api/dashboard/yearlyreminder/${month}/${year}`;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }


  halfyearlyreminder(month,year){
    
    const URL =environment.API+`/api/dashboard/halfyearlyreminder/${month}/${year}`;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }


  quarterlyreminder(month,year){
    
    const URL =environment.API+`/api/dashboard/quarterlyreminder/${month}/${year}`;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }

  monthlyreminder(month,year){
    
    const URL =environment.API+`/api/dashboard/monthlyreminder/${month}/${year}`;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }


  weeklyreminder(month,year){
    
    const URL =environment.API+`/api/dashboard/weeklyreminder/${month}/${year}`;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }


  dailyreminder(month,year){
    
    const URL =environment.API+`/api/dashboard/dailyreminder/${month}/${year}`;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }

 

  /***************** */

  getListOfConversations(){
    
    const URL =environment.API+`/api/conversations`;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }
 

  sendMessage(uid,message,file=null){
 

    let formData = new FormData();


    
    formData.append('content', message);
    formData.append('receiver_id', uid); 
    
    if (file != null) {
      formData.append('file', file);
    }
    
    const URL =environment.API+`/api/message`;

    const headers= new HttpHeaders() 
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.post(URL,formData,{
        headers: headers
      }) 

  }



  getMessagesByConversationID(id){
    

    const URL =environment.API+`/api/conversations/${id}/messages`;

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

      return this.http.get(URL,{
        headers: headers
      }) 
  }

}
