import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Productos } from '../../shared/productos/productos';
import { Articulos } from "../../shared/articulos/articulos";

@Component({
  selector: 'app-home',
  imports: [Hero, Productos, Articulos],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
