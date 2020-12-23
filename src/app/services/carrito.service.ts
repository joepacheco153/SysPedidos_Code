import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito_items = [];

  carritofinal = [];

  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  public url:string ='http://localhost:2020/';

  constructor(private http:HttpClient){

    let parseCarrito = JSON.parse(localStorage.getItem('carrito'))
    this. carrito_items = parseCarrito || []

  }
  getdata (){
    return this.carrito_items;
  }

  addLocalStorage(item){
    //FIND SI EXITE ESE PLATO EN LOCALSTORAGE
    //crariamos un nuevo objeto + cantidad
    console.log(item)

    let found = this.carrito_items.find(plato => plato.idMenu === item.idMenu);
    console.log(item.idMenu)
    console.log(item)
    //console.log(found)
    if (found) {
      console.log("found" + JSON.stringify(found)) 
      console.log("item" + JSON.stringify(item))
       this.foundLocalStorage(found,item)
     } else {
       this.notfoundLocalStorage(item)
     }
  }

  foundLocalStorage(item,newItem){    
    console.log(item)
      console.log(newItem)
    this.carrito_items = this.carrito_items.map(item => {
       if(item.idMenu == newItem.idMenu){
         return {...item,cantidad:item.cantidad + newItem.cantidad}
       }
       return item
    })     
    localStorage.setItem('carrito', JSON.stringify(this.carrito_items));
  }

  notfoundLocalStorage(item){    
    this.carrito_items.push(item)    
    localStorage.setItem('carrito', JSON.stringify(this.carrito_items));
  }

  clear(){
    localStorage.clear();
    this.carrito_items = []
  }
  deleteMenu(id){
    console.log("Servicio ===>")
    console.log(id)
    let newCarrito = this.carrito_items.filter(data =>{
      //id = data.idMenu
      return data.idMenu != id
    })

    // New arrray reemplazarlo por el arrito item
    this.carrito_items = newCarrito;
    console.log(this.carrito_items);
    // Pondriamos el enuevo array en el localstorage
    localStorage.setItem('carrito', JSON.stringify(this.carrito_items));
    //console.log(newArray)
    console.log(this.carrito_items)
  }

  GuardarOrden(){
 
    for (let item of this.carrito_items){

      this.carritofinal.push(item.id,item.cantidad, item.precio)
      console.log(this.carritofinal)
      console.log(item)

    }
  }

  


  
  
  }
