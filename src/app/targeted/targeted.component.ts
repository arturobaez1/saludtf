import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-targeted',
  templateUrl: './targeted.component.html',
  styleUrls: ['./targeted.component.css']
})
export class TargetedComponent implements OnInit {
  productos: Producto[] = [];

  constructor( private productosService: ProductosService) { }

  ngOnInit() {
    this.productos = this.productosService.getProducto();
  }


}
