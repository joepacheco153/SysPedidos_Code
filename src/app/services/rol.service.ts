import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Rol } from '../modelos/rol';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  //endpoint
  private url='http://localhost:2020/rol/';
  constructor(private http:HttpClient,private authService: AuthService,private router: Router) { }
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
  
  getListarRoles(){
    return this.http.get<Rol[]>(this.url+'readall', {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  getRol(id:number){
    return this.http.get(`${this.url}read/${id}`, {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  crearRol(rol:Rol){
    return this.http.post<Rol>(this.url+'add', rol, {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  deleteRol(id:number){
    return this.http.delete<number>(this.url+'delete/'+id ,  {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  updateRol(rol:Rol){
    return this.http.put<number>(this.url+'update/'+ rol.idrol , rol, {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }


}

  