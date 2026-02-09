import { Component } from '@angular/core';
import { Products } from '../../models/productos';
import { DetalleProducto } from "../../shared/detalle-producto/detalle-producto";

@Component({
  selector: 'app-consultas',
  imports: [DetalleProducto],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {

  products = [
    {
      id: 1, 
      nombre: "Monitor de Frecuencia Cardíaca", 
      tipo: "Salud", 
      historial: "Monitorea tu ritmo cardíaco en tiempo real las 24 horas. Recibe alertas si detecta frecuencias anormales durante el reposo o ejercicio."
    },
    {
      id: 2, 
      nombre: "Seguimiento de Sueño Avanzado", 
      tipo: "Bienestar", 
      historial: "Analiza las fases de tu sueño (ligero, profundo y REM) para ayudarte a entender tu calidad de descanso y mejorar tus hábitos nocturnos."
    },
    {
      id: 3, 
      nombre: "GPS Integrado", 
      tipo: "Deportes", 
      historial: "Rastrea tu ruta, distancia, velocidad y elevación sin necesidad de llevar tu teléfono. Perfecto para running, ciclismo y senderismo."
    },
    {
      id: 4, 
      nombre: "Medidor de Oxígeno en Sangre (SpO2)", 
      tipo: "Salud", 
      historial: "Mide los niveles de saturación de oxígeno en tu sangre para monitorear tu salud respiratoria y adaptación a diferentes altitudes."
    },
    {
      id: 5, 
      nombre: "Notificaciones Inteligentes", 
      tipo: "Conectividad", 
      historial: "Recibe llamadas, mensajes y notificaciones de tus apps favoritas directamente en tu muñeca. Responde con respuestas rápidas predefinidas."
    },
    {
      id: 6, 
      nombre: "Resistencia al Agua 5ATM", 
      tipo: "Durabilidad", 
      historial: "Resiste inmersiones de hasta 50 metros de profundidad. Nada, surfea o dúchate sin preocuparte por dañar tu dispositivo."
    }
  ]

  productoSeleccionado: Products | null = null;

  mensajeAviso:string='';

  //Funcion que se ejecuta cuando el usuario de click en "Ver Ficha"
  verDetalles(products:Products){
    this.productoSeleccionado=products;
  }

  //Funcion encargada de gestionar el evento personalizado que viene del hijo detalle-pacientes
  procesarAviso(mensaje:string){
    this.mensajeAviso=mensaje;
  }

}