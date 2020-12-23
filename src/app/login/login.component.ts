import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../models/Usuario';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usuario:Usuario;

  constructor(private _fb: FormBuilder, private router:Router,private authService: AuthService,private toastr: ToastrService,) { }

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this._fb.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }
  login() {
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe(response=>{
     console.log(response);
      this.authService.guadarUser(response.access_token);
      this.authService.guadarToken(response.access_token);
      this.router.navigate(['/dashboard']); 
      console.log(this.loginForm.value)
      this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Bienvenido', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon",
        positionClass: 'toast-top-right'
      });
    },err =>{
      this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span>ERROR - Datos incorrectos.', '', {
        timeOut: 5000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-error alert-with-icon",
        positionClass: 'toast-top-right'
      });

    });
      
   
   
      

  }


}
