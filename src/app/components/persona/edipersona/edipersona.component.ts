import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from '../../../modelos/persona';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-edipersona',
  templateUrl: './edipersona.component.html',
  styleUrls: ['./edipersona.component.css']
})
export class EdipersonaComponent implements OnInit {
  personas:any;
  persona:Persona=new Persona();
  constructor(private personaService:PersonaService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPersona();
  }
  cargarPersona(){
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.personaService.getPersona(id).subscribe(
          (data)=>{
          this.personas=data;
          
            this.persona.nombre=this.personas.nombre;
            this.persona.apellidos=this.personas.apellidos;
            this.persona.dni=this.personas.dni;
            this.persona.edad=this.personas.edad;
            this.persona.telefono=this.personas.telefono;
            this.persona.correo=this.personas.correo;
            this.persona.idpersona=this.personas.idpersona;
            console.log(data)  
        })
      }
    }) 
  }

  modificarPersona(){
    console.log(this.persona) 
    this.personaService.updatePersona(this.persona).subscribe(
      response=>{
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
            this.router.navigate(['/dashboard/app-listpersona'])
            Swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'
            )
          }
        })    
    })
  }

}
