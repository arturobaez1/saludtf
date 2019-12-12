import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-digestiva',
  templateUrl: './digestiva.component.html',
  styleUrls: ['./digestiva.component.css']
})
export class DigestivaComponent implements OnInit {

  productos: Producto[] = [];

  constructor( private productosService: ProductosService) { }

  ngOnInit() {
    this.productos = this.productosService.getProducto();
  }

}
