import { Component, Input, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() plato;

  count:number = 0

  constructor(private _carritoService :CarritoService) { }

  ngOnInit() {
  
  }


  addCount(){
    this.count += 1
  }

  substractionCount(){
    if (this.count > 0) {
      this.count -= 1      
    }
    
  }
  savePlato(){

    this._carritoService.addLocalStorage({...this.plato,cantidad:this.count})
    console.log(this.plato)
    this.count = 0
  }
}
