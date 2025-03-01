import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../services/productos.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  productos: Producto[] = [];

  usuario: object = {
    nombre: '',
    email: '',
    mensaje: '',
  };

  constructor( private productosService: ProductosService ) { }

  ngOnInit() {
    this.productos = this.productosService.getProducto();

  }

  guardar(forma: NgForm) {

  }

}


