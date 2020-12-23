import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarritoService } from '../services/carrito.service';
import { DetPedidoService } from '../services/det-pedido.service';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
newCarrito :any;

  loadingPayment: Boolean = false;

  constructor(private toastr: ToastrService, public carritoService: CarritoService, private _detPedidoService: DetPedidoService, private _pedidoService: PedidoService) { }
  ngOnInit() {}
  
  payment() {
    this.loadingPayment = true
    this.savePedido()  
  }
  deleteMenu(id){
 this.carritoService.deleteMenu(id)
  }

  savePedido(){
    let objPedido = {
      "fecha_pedido": this.parsedDateNow(),
      "direntrega": "direccion prueba ejemplo",
      "estado": 1,
      "metodocompra": 1,
      "costototal": this.parsedCarritoSubtotal(),
      "idUsuario": 1,
      "idEmpresa": 1
    }
    this._pedidoService.postPedido(objPedido).subscribe(idPedido => {
      this.saveDetPedido(idPedido)
      this.loadingPayment = false 
      this.carritoService.clear()
      this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Gracias por comprar - Vuelva pronto.', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon",
        positionClass: 'toast-top-right'
      });
    })
  }

  saveDetPedido(idPedido){
    this.carritoService.carrito_items.forEach(carritoItem => {
      console.log(carritoItem)
      let objDetPedido ={
        "cantidad": carritoItem.cantidad,
        "costoprod" : carritoItem.precio * carritoItem.cantidad,
        "idPedidos": idPedido,
        "idMenu": carritoItem.idMenu
      }
      this._detPedidoService.postDet_Pedido(objDetPedido).subscribe(data => {
        console.log(data)
      })
    });
  }

  parsedCarritoSubtotal() {
    return this.carritoService.carrito_items.map(item => (item.cantidad * item.precio)).reduce((a, b) => a + b)
  }

  parsedDateNow() {
    let dateNow = new Date()
    let day = dateNow.getDate()
    let month = dateNow.getMonth() + 1
    let year = dateNow.getFullYear()
    return `${day}-${month}-${year}` 
  }
}

