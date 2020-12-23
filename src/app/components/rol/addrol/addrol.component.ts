import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../../modelos/rol';
import { RolService } from '../../../services/rol.service';

@Component({
  selector: 'app-addrol',
  templateUrl: './addrol.component.html',
  styleUrls: ['./addrol.component.css']
})
export class AddrolComponent implements OnInit {
  public rol:Rol;
  public roles:Rol[];
  constructor(private rolService:RolService,
              private router : Router) { 
    this.rol = new Rol();
              }

  ngOnInit(): void {
  }
  RegistrarRol(){
    
    this.rolService.crearRol(this.rol)
    .subscribe(data =>{
      Swal.fire({
        title: 'Estas seguro?',
        text: "Confirma la operacion",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/dashboard/app-listrol'])
          Swal.fire(
            'Correcto!',
            'El usuario ha sido registrado.',
            'success'

          )
        }
      })  

    })
  }
}
