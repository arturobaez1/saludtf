import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.css']
})
export class PesoComponent implements OnInit {

  productos: Producto[] = [];

  constructor( private productosService: ProductosService) { }

  ngOnInit() {
    this.productos = this.productosService.getProducto();
  }


}
