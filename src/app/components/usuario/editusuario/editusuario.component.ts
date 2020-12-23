import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.css']
})
export class EditusuarioComponent implements OnInit {
  usuarios:any;
  usuario:Usuario=new Usuario();
  constructor(private usuarioService:UsuarioService,
              private router:Router,
              private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }
  cargarUsuario(){
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.usuarioService.getUsuario(id).subscribe(
          (data)=>{
          this.usuarios=data;
          
          console.log(data)  
          this.usuario.username=this.usuarios.username;
          this.usuario.password="********";
          this.usuario.idusuario=this.usuarios.idusuario;
        })
      }
    }) 
  }
  modificarUsuario(){
    
      Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.updateUsuario(this.usuario).subscribe(
          response=>{
               
        })
        this.router.navigate(['/dashboard/app-listusuario'])
        Swal.fire(
          'Actualizado!',
          'El registro ha sido Modificado.',
          'success'

        )
      }
    }) 


  }

}
