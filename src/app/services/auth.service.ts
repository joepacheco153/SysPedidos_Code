import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario: Usuario;
  private _token: string;
  constructor(private http: HttpClient) { }
  /*
    public get usuario(): any {
      if(this._usuario!=null){
        return this._usuario;
      }else if(this._usuario==null && sessionStorage.getItem('usuario')!=null){
        this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
        return this._usuario;
      }
      return  new Usuario;
    }
  */
  public get token(): string {

    let validationTokenAndSessionStorage = this._token == null && sessionStorage.getItem('token') != null
    if (this._token != null) {
      return this._token;
    } else if (validationTokenAndSessionStorage) {
      this._token = sessionStorage.getItem("token");
      return this._token;
    }
    return null;
  }

  login(usuario: any): Observable<any> {
    const urlEndpoint = 'http://localhost:2020/oauth/token';

    const credenciales = btoa('ejemploJWT' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });
    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);
    return this.http.post(urlEndpoint, params.toString(), { headers: httpHeaders });
  }

  guadarUser(accesToken: string) {
    let { idusuario, user_name, nombre, apellidos, dni, correo, edad, nomrol } = this.obtenerDatosToken(accesToken);
    this._usuario = new Usuario(idusuario, user_name, nombre, apellidos, dni, correo, edad, nomrol);
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }
  guadarToken(accesToken: string): void {
    this._token = accesToken;
    sessionStorage.setItem('token', accesToken);
  }
  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }
  isAuthenticated(): boolean {
    let payload = this.obtenerDatosToken(this.token);
    return payload != null && payload.user_name && payload.user_name.length > 0 ? true : false
  }

  logout() {
    this.clearStorage()
    this.nullValues();
  }

  nullValues() {
    this._token = null;
    this._usuario = null;
  }

  clearStorage() {
    sessionStorage.clear();
    localStorage.clear();
  }



}
