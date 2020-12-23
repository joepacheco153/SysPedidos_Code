import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Membresia } from '../modelos/membresia';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MembresiaService {
  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  //endpoint
  private url='http://localhost:2020/membresia';
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


  //metodos
  getListarMembresias(){
    return this.http.get<Membresia[]>(this.url+'/', {headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return throwError(e);
      }));
  }
}
