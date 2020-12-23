import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Membresia } from '../../../modelos/membresia';
import { MembresiaService } from '../../../services/membresia.service';

@Component({
  selector: 'app-listmembresia',
  templateUrl: './listmembresia.component.html',
  styleUrls: ['./listmembresia.component.css']
})
export class ListmembresiaComponent implements OnInit {
  public membresia:Membresia;
  public membresias:Membresia[];
  constructor(private membresiaService:MembresiaService,
              private router: Router) { 
    this.membresia = new Membresia();
              }

  ngOnInit(): void {
    this.listarMembresias();
  }
  listarMembresias(){
    this.membresiaService.getListarMembresias()
    .subscribe(data=>{
      this.membresias=data;
      console.log("hola")
      console.log(data);
    });
  }
}
