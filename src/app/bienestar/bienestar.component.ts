import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-bienestar',
  templateUrl: './bienestar.component.html',
  styleUrls: ['./bienestar.component.css']
})
export class BienestarComponent implements OnInit {

  productos: Producto[] = [];

  constructor( private productosService: ProductosService) { }

  ngOnInit() {
    this.productos = this.productosService.getProducto();
  }

}
