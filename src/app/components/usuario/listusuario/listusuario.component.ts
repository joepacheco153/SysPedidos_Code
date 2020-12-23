import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-listusuario',
  templateUrl: './listusuario.component.html',
  styleUrls: ['./listusuario.component.css']
})
export class ListusuarioComponent implements OnInit {
  public usuario:Usuario;
  public usuarios:Usuario[];

  constructor(private usuarioService:UsuarioService,
              private router:Router) {
    this.usuario = new Usuario();
               }

  ngOnInit(): void {
    this.listarUsuarios();
  }
  listarUsuarios(){
    this.usuarioService.getListarUsuarios()
    
    .subscribe(data=>{
      this.usuarios=data;
      console.log(data);
    });
  }
  eliminarUsuario(num:number){
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
        this.usuarioService.deleteUsuario(num)
       .subscribe(
      response=>{
        this.listarUsuarios()
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
