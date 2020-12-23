import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../modelos/usuario';
import Swal from 'sweetalert2';
import { Persona } from '../../../modelos/persona';
import { PersonaService } from '../../../services/persona.service';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class AddusuarioComponent implements OnInit {
  public usuario:Usuario;
  public persona:Persona;
  public personas2:Persona;
  public personas:Persona[];
  constructor(private personaService:PersonaService,
              private usuarioService:UsuarioService,
              private router:Router) {
                this.persona = new Persona();
                this.usuario = new Usuario();
               }

  ngOnInit(): void {
    this.listarPersonas();
  }
  listarPersonaDNI(dni:String){
    console.log(dni)
    this.personaService.getListarPersonaDNI(dni)
    .subscribe(data=>{
      this.personas2=data;
      console.log(data);
      this.persona.apellidos = this.personas2.apellidos;
      this.persona.idpersona = this.personas2.idpersona;
      this.usuario.idpersona = this.personas2.idpersona;
     
    });
  }
  listarPersonas(){
    this.personaService.getListarPersonas()
    .subscribe(data=>{
      this.personas=data;
      console.log(data);
    });
  }
  RegistrarUsuario(){
    console.log(this.usuario);
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
        this.usuarioService.crearUsuario(this.usuario)
    .subscribe(data =>{
    });
        this.router.navigate(['/dashboard/app-listusuario'])
        Swal.fire(
          'Correcto!',
          'El usuario ha sido registrado.',
          'success'

        )
      }
    }) 
    
  }


}
