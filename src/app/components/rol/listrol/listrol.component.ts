import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../../modelos/rol';
import { RolService } from '../../../services/rol.service';

@Component({
  selector: 'app-listrol',
  templateUrl: './listrol.component.html',
  styleUrls: ['./listrol.component.css']
})
export class ListrolComponent implements OnInit {
  public rol:Rol;
  public roles:Rol[];
  constructor(private rolService:RolService,
              private router: Router) {
    this.rol = new Rol();
               }

  ngOnInit(): void {
    this.listarRoles();
  }

  listarRoles(){
    console.log("hola");
    this.rolService.getListarRoles()
    .subscribe(data=>{
      this.roles=data;
      
    });
  }
  eliminarRol(num:number){
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rolService.deleteRol(num)
       .subscribe(
      response=>{
        this.listarRoles()
      }
    ) 
        Swal.fire(
          'Eliminado!',
          'El registro ha sido Modificado.',
          'success'

        )
      }
    }) 
  }

}
