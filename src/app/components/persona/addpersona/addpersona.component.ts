import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from '../../../modelos/persona';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-addpersona',
  templateUrl: './addpersona.component.html',
  styleUrls: ['./addpersona.component.css']
})
export class AddpersonaComponent implements OnInit {
  public persona:Persona;
  constructor(private personaService:PersonaService,
              private router:Router) {
                this.persona = new Persona();
               }

  ngOnInit(): void {
  }

  registrarPersona(){
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
        this.personaService.crearPersona(this.persona)
    .subscribe(data =>{
    });
        this.router.navigate(['/dashboard/app-listpersona'])
        Swal.fire(
          'Correcto!',
          'La persona ha sido registrada.',
          'success'

        )
      }
    }) 







    
  }

}
