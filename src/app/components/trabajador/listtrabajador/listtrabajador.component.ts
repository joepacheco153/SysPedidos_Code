import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Trabajador } from '../../../modelos/trabajador';
import { TrabajadorService } from '../../../services/trabajador.service';

@Component({
  selector: 'app-listtrabajador',
  templateUrl: './listtrabajador.component.html',
  styleUrls: ['./listtrabajador.component.css']
})
export class ListtrabajadorComponent implements OnInit {
  public trabajador:Trabajador;
  public trabajadores:Trabajador[];
  constructor(private trabajadorService:TrabajadorService,
              private router:Router) {
  this.trabajador = new Trabajador();
               }

  ngOnInit(): void {
    this.listarTrabajadores();
  }
  listarTrabajadores(){
    this.trabajadorService.getListarTrabajadoresGeneral()
    .subscribe(data=>{
      this.trabajadores=data;
      console.log(data)
    });
  }
  eliminarTrabajador(num:number){
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
        this.trabajadorService.deleteTrabajador(num)
       .subscribe(
      response=>{
        this.listarTrabajadores()
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
