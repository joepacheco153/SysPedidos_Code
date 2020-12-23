import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username:any;
  _usuario:string;
  constructor(private toastr: ToastrService,private auth:AuthService,private router:Router) { }

  ngOnInit() {
    this.getDatos()
  }
  getDatos(){
 
    this._usuario = JSON.parse(sessionStorage.getItem('usuario'));
    console.log(this._usuario)
  }
  logout(){
     
    this.auth.logout();
    this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span>Logout- Completado .', '', {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-warning alert-with-icon",
      positionClass: 'toast-top-right'
    });
    this.router.navigate(['/']);
  } 
 

}
