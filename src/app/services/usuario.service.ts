import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../modelos/usuario';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  //endpoint
  public url:string ='http://localhost:2020/user';
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

  //metodos
  constructor(private http:HttpClient,private authService: AuthService,private router: Router){ }
  getListarUsuarios(){
    return this.http.get<Usuario[]>(this.url+'/readall', {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
 }
  getUsuario(id:number){
   return this.http.get(`${this.url}/read/${id}`, {headers:this.addAuthorizationHeader()}).pipe(
    catchError(e =>{
      this.isNoAutorization(e);
      return throwError(e);
    }));
 }
  getUsuariodni(DNI:string){
    return this.http.get<Usuario>(this.url+'/readdni/'+DNI, {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  crearUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.url+'/add', usuario , {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  deleteUsuario(id:number){
    return this.http.delete<number>(this.url+'/delete/'+id , {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  updateUsuario(usuario:Usuario){
    return this.http.put<number>(this.url+'/update/'+ usuario.idusuario , usuario , {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }

}
