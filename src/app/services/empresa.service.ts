import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  public url:string ='http://localhost:2020/';
  private urlmenu= this.url+'menu/';
  constructor(private http:HttpClient,private router:Router,private authService: AuthService){

  }
  private isNoAutorization(e): boolean{
    if(e.status==401 || e.status==403){
      this.router.navigate(['/'])
      return true;
    }
    return false;
  }
 

  private addAuthorizationHeader(){
    let token = this.authService.token;
    if(token!=null){
      return this.htpHeaders.append('Authorization','Bearer '+ token);
    }
    return this.htpHeaders;
  }
  
  private urlempresa= this.url+'empresa/';


  getEmpresas(){
    return this.http.get<any>(this.urlempresa, {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      })
    );
  }
  
}
