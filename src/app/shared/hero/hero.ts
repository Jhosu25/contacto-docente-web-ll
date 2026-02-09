import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  
  //La informacion que recibe del componente padre
  @Input() titulo!:string;
  @Input() textoBoton!:string;
  @Input() imagen!:string;
}
