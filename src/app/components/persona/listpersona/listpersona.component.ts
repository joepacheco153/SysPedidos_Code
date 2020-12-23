import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from '../../../modelos/persona';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-listpersona',
  templateUrl: './listpersona.component.html',
  styleUrls: ['./listpersona.component.css']
})
export class ListpersonaComponent implements OnInit {
  public persona:Persona;
  public personas:Persona[];
  constructor(private personaService:PersonaService,
              private router: Router) { 
    this.persona = new Persona();
              }

  ngOnInit():void {
    this.listarPersonas();
  }
  listarPersonas(){
    this.personaService.getListarPersonas()
    .subscribe(data=>{
      this.personas=data;
      console.log(data);
    });
  }
  eliminarPersona(num:number){
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
        this.personaService.deletePersona(num)
       .subscribe(
      response=>{
        this.listarPersonas()
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
