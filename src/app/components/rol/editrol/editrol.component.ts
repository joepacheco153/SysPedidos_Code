import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from '../../../modelos/rol';
import { RolService } from '../../../services/rol.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editrol',
  templateUrl: './editrol.component.html',
  styleUrls: ['./editrol.component.css']
})
export class EditrolComponent implements OnInit {
  roles:any;
  rol:Rol=new Rol();

  constructor(private rolService:RolService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarRol();
  }
  cargarRol(){
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.rolService.getRol(id).subscribe(
          (data)=>{
          this.roles=data;
          
          console.log(data)  
          this.rol.nomrol=this.roles.nomrol;
        this.rol.idrol=this.roles.idrol;
        })
      }
    }) 
  }
  modificarRol(){
    this.rolService.updateRol(this.rol).subscribe(
      response=>{
        swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/dashboard/app-listrol'])
            swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'

            )
          }
        })    
    })
  }


}
