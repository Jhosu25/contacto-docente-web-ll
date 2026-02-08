import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Productos } from '../../shared/productos/productos';

@Component({
  selector: 'app-home',
  imports: [Hero, Productos],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
