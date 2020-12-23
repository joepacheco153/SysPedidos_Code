import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Empresa } from '../modelos/empresa';
import { Trabajador } from '../modelos/trabajador';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  //endpoint
  private url='http://localhost:2020/trabajador';
  private url2='http://localhost:2020/empresa';
  constructor(private http:HttpClient, private authService: AuthService,private router: Router) { }

  private addAuthorizationHeader(){
    let token = this.authService.token;
    if(token!=null){
      return this.htpHeaders.append('Authorization','Bearer '+ token);
    }
    return this.htpHeaders;
  }
  private isNoAutorization(e): boolean{
    if(e.status==401 || e.status==403){
      this.router.navigate(['/'])
      return true;
    }
    return false;
  }

  //metodos
  getListarTrabajadoresGeneral(){
    return this.http.get<Trabajador[]>(this.url+'/readall2', {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  getTrabajador(id:number){
    return this.http.get(`${this.url}/read/${id}`, {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  crearTrabajador(trabajador:Trabajador){
    return this.http.post<Trabajador>(this.url+'/add', trabajador,{headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  deleteTrabajador(id:number){
    return this.http.delete<number>(this.url+'/delete/'+id,{headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  updateTrabajador(trabajador:Trabajador){
    return this.http.put<number>(this.url+'/update/'+ trabajador.idtrabajador , trabajador,{headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  getListarEmpresas(){
    return this.http.get<Empresa[]>(this.url2+'/', {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }

}
