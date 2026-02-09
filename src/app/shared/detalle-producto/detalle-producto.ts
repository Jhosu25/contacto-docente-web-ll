import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../models/productos';

@Component({
  selector: 'app-detalle-producto',
  imports: [],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export class DetalleProducto {

  //Indicar que el componente  padre va a enviar informacion
  //El signo ? indica que puede ser opcional el dato que llega
  @Input() products?:Products;

  //Enviar un evento al padre
  //Creamos el evento "notificarAccion"
  @Output() notificarAccion = new EventEmitter<string>();

  //Funcion que se va a activar con un click en el boton de componente Hijo
  //Definir que hace el evento notificarAccion
  avisarIngreso(): void{
    if(this.products){
      this.notificarAccion.emit(
        `El producto ${this.products.nombre} tiene 20 unidades en stock`,
      );
    }
  }

}
