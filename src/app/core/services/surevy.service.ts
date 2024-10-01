import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurevyService {

  constructor(
    private httpClient: HttpClient
  ) {}

  allSurveys(params={}): Observable<any[]> {
    const url = `${environment.API}/api/surveys`;
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));

    return this.httpClient.get<any[]>(url,{params:params,headers:headers},)

    
      
  }

  addSurvey(data:any) {
 
      const URL =environment.API+`/api/surveys/create`;

      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', localStorage.getItem('tokenTYPE') + ' '+localStorage.getItem('token'));
  
        return this.httpClient.post(URL,data,{
          headers: headers
        }) 
  }


  /*getSurvey(id:any): Observable<any[] | CommonError> {
    const url = `surveys/get/${id}`;
    return this.httpClient
      .get<any[]>(url)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }

  getStatistics(id:any): Observable<any[] | CommonError> {
    const url = `surveys/statistics/${id}`;
    return this.httpClient
      .get<any[]>(url)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }

  getLatestSurvey(): Observable<any[] | CommonError> {
    const url = `surveys/latest`;
    return this.httpClient
      .get<any[]>(url)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }

  responseSurvey(id:any, data:any): Observable<any[] | CommonError> {
    const url = `surveys/answer/${id}`;
    return this.httpClient
      .post<any[]>(url,data)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }

 
  updateSurvey(id:any,data:any): Observable<any[] | CommonError> {
    const url = `surveys/update/${id}`;
    return this.httpClient
      .put<any[]>(url,data)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }

  deleteSurvey(id:any): Observable<any[] | CommonError> {
    const url = `surveys/delete/${id}`;
    return this.httpClient
      .delete<any[]>(url)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }*/
}
