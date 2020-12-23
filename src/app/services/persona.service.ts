import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../modelos/persona';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  //endpoint
  private url='http://localhost:2020/persona';
  constructor(private http:HttpClient, private authService: AuthService,private router: Router){}

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
  getListarPersonas(){
    

    return this.http.get<Persona[]>(this.url+'/readall', {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));


  }
  crearPersona(persona:Persona){
    return this.http.post<Persona>(this.url+'/add',persona, {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  
  getListarPersonaDNI(DNI:String){
    return this.http.get<Persona>(this.url+'/readdni/'+DNI, {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  getPersona(id:number){
    return this.http.get(`${this.url}/read/${id}`, {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  deletePersona(id:number){
    return this.http.delete<number>(this.url+'/delete/'+id, {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  updatePersona(persona:Persona){
    return this.http.put<number>(this.url+'/update/'+ persona.idpersona , persona, {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
  

}
