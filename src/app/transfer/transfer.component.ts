import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  productos: Producto[] = [];

  constructor( private productosService: ProductosService) { }

  ngOnInit() {
    this.productos = this.productosService.getProducto();
  }

}
