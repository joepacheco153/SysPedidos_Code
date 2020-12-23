import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolService } from '../../../services/rol.service';

import { Rol } from '../../../modelos/rol';
import { Trabajador } from '../../../modelos/trabajador';
import { TrabajadorService } from '../../../services/trabajador.service';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2';
import { Empresa } from '../../../modelos/empresa';
import { Usuario } from '../../../modelos/usuario';
import { PersonaService } from '../../../services/persona.service';
import { Persona } from '../../../modelos/persona';


@Component({
  selector: 'app-addtrabajador',
  templateUrl: './addtrabajador.component.html',
  styleUrls: ['./addtrabajador.component.css']
})
export class AddtrabajadorComponent implements OnInit {
  public roles:Rol[];
  public empresas:Empresa[];
  public trabajador:Trabajador;
  public usuarios:Usuario;
  public usuarios2:Usuario;
  public personas:Persona[];
  public persona:Persona;
  public persona2:Persona;
  constructor(private trabajadorService:TrabajadorService,
              private rolService:RolService,
              private usuarioService:UsuarioService,
              private personaService:PersonaService,
              private router:Router) {
                  this.trabajador = new Trabajador();
                  this.usuarios = new Usuario();
                  this.persona = new Persona();
               }

  ngOnInit(): void {
    this.listarEmpresas();
    this.listarRoles();
    this.listarPersonas();
  }
  listarPersonas(){
    this.personaService.getListarPersonas()
    .subscribe(data=>{
      this.personas=data;
      console.log(data);
    });
  }
  listarRoles(){
    this.rolService.getListarRoles()
    .subscribe(data=>{
      this.roles=data;
      console.log(data)
    });
  }
  listarEmpresas(){
    this.trabajadorService.getListarEmpresas()
    .subscribe(data=>{
      this.empresas=data;
      console.log(data)
    });
  }
  listarUsuariosDni(dni:string){
    this.usuarioService.getUsuariodni(dni)
    .subscribe(data=>{
      this.usuarios2=data;
      console.log(data);
      this.usuarios.username = this.usuarios2.username;
      this.trabajador.idusuario = this.usuarios2.idusuario;
      console.log(this.trabajador)
    });
  }
  registrarTrabajador(){
    console.log(this.trabajador);
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
        this.trabajadorService.crearTrabajador(this.trabajador)
    .subscribe(data =>{
    });
        this.router.navigate(['/dashboard/app-listtrabajador'])
        Swal.fire(
          'Correcto!',
          'El usuario ha sido registrado.',
          'success'

        )
      }
    }) 
    
  }
}
