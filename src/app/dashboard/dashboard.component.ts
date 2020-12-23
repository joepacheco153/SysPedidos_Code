import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { EmpresaService } from '../services/empresa.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
 
  restaurantes:any;
  menu:any; 
  constructor(private _EmpresasService:EmpresaService, private _MenuService:MenuService) { }

  ngOnInit() {
    this.listarEmpresas();
    this.listarMenu();
    
   }

  listarEmpresas(){
    this._EmpresasService.getEmpresas().subscribe((data)=>{
      this.restaurantes = data
    })
  }
  listarMenu(){
    this._MenuService.listMenus().subscribe((data) =>{
    this.menu =data
    })
  }

}
