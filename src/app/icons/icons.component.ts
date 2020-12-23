import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { EmpresaService } from '../services/empresa.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  empresas: any;
  menu: any;

  
  count:number = 0;
  constructor(private _EmpresasService: EmpresaService, private _menuService: MenuService, public carritoService: CarritoService) { }

  ngOnInit() {
    console.log(this.carritoService.carrito_items)
    this.listarEmpresas();
  }
  listarEmpresas() {
    this._EmpresasService.getEmpresas().subscribe((data) => {
      this.empresas = data;
      console.log(this.empresas)
    });
  }

  listMenu(idEmpresa: number) {
    this._menuService.getMenuByEmpresa(idEmpresa).subscribe((data) => {
      this.menu = data
    })
  }
  addCount(){
    this.count+=1
  }
  substractionCount(){
    if (this.count > 0) {
      this.count -= 1      
    }
  } 
  savePlato(plato){

    console.log(plato);
 
    let newPlato = {...plato,cantidad:this.count}
    this.carritoService.addLocalStorage(newPlato)
    console.log("SOY EL MENU QUE ESTA ENVIANDO"+ JSON.stringify(this.menu))
    this.count = 0
  }

  add(plato){
    console.log("Hola soy carrito");    
    this.carritoService.addLocalStorage(plato)
  }
  readCarrito(){
    console.log(this.carritoService.carrito_items)
    this.guardarCarrito();
  }

  delete(){
    this.carritoService.clear();
  }

  guardarCarrito(){
    this.carritoService.GuardarOrden();
  } 


}
