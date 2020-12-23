import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  public url:string ='http://localhost:2020/';
  private urlmenu= this.url+'menu/';
  constructor(private http:HttpClient,private authService: AuthService,private router: Router){

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
  

   getMenuByEmpresa(idEmpresa:number){
    
    return this.http.get<any>(this.urlmenu+idEmpresa,  {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }

  listMenus(){
    return  this.http.get<any>(this.urlmenu, {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }

 

}
 