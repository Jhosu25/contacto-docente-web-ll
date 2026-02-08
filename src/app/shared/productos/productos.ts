import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  subtitulo: String = "Calidad garantizada";

  //Variable para seleccionar un servicio
  productoSeleccionado: String="ninguno"

  producto = [
    {
      id:1,
      nombre:"Apple Watch Series 11",
      descripcion:"Smartwatch de Apple con funciones avanzadas de salud como ECG, puntuación de sueño, notificaciones de hipertensión y hasta 24 h de batería. Compatible con iPhone y con conectividad LTE opcional.",
      imagen:"https://www.apple.com/la/apple-watch-series-11/images/overview/health/health_sleep_score__d4pcoy8v0cwi_large.jpg",
      activo: true
    },
    {
      id:2,
      nombre:"Samsung Galaxy Watch 8",
      descripcion:"Smartwatch Android con pantalla brillante, diseño delgado, resistencia IP68, seguimiento avanzado de salud y AI integrada. Ideal para usuarios de Android.",
      imagen:"https://image-us.samsung.com/us/watches/galaxy-watch8/images/galaxy-watch8-kv.jpg?imbypass=true",
      activo: false
    },
    {
      id:3,
      nombre:"Google Pixel Watch 3",
      descripcion:"Smartwatch con Wear OS, pantalla AMOLED, sensores de salud y fitness, GPS y disponibilidad en varias versiones (Wi-Fi o LTE).",
      imagen:"https://static2.pisapapeles.net/uploads/2024/09/Google-Pixel-Watch-3.jpg",
      activo: false
    },
    {
      id:4,
      nombre:"Garmin Venu 3",
      descripcion:"Smartwatch con pantalla AMOLED de 1.4″, batería de larga duración (hasta 14 días en modo reloj), GPS multibanda, métricas avanzadas de salud y resistencia al agua 5 ATM.",
      imagen:"https://res.garmin.com/en/products/010-02784-00/g/58837-M-VID.jpg",
      activo: true
    },
    {
      id:5,
      nombre:"OnePlus Watch 3",
      descripcion:"Reloj inteligente con cuerpo de acero y titanio, pantalla AMOLED, gran batería y resistencia MIL-STD-810H + IP68, compatible con Wear OS para apps y funciones inteligentes.",
      imagen:"https://image01.oneplus.net/media/202502/12/b3c115c086af4684e803827886a183bb.png",
      activo: false
    },
    {
      id:6,
      nombre:"Xiaomi Watch S3",
      descripcion:"Smartwatch elegante con pantalla AMOLED, buena autonomía (hasta 15 días), seguimiento deportivo y sensores de salud completos.",
      imagen:"https://i.blogs.es/a66dbe/watch-s3-00/840_560.jpeg",
      activo: true
    },
    {
      id:7,
      nombre:"Huawei Watch GT 4",
      descripcion:"Reloj inteligente con diseño premium, batería de larga duración (hasta 14 días), GPS preciso y monitoreo avanzado de salud.",
      imagen:"https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt4/watch-gt4-g/images/new/sec1/huawei-watch-gt4.jpg",
      activo: false
    },
    {
      id:8,
      nombre:"Amazfit GTR 4",
      descripcion:"Smartwatch deportivo con GPS de doble banda, más de 150 modos deportivos y batería de hasta 14 días.",
      imagen:"https://www.maxmovil.com/media/wysiwyg/Fichas-de-producto/Noviembre-2023/Amazfit_GTR4_0001_Amazfit-GTR-4-TECNOLOCURA-1.jpg",
      activo: true
    },
    {
      id:9,
      nombre:"Fitbit Sense 2",
      descripcion:"Enfocado en salud y bienestar, incluye medición de estrés, ECG, oxígeno en sangre y seguimiento del sueño.",
      imagen:"https://m.media-amazon.com/images/I/61Q79ulDs6L.jpg",
      activo: false
    }
  ]

  //Arreglo para filtrar los productos{
  productosFiltrados = this.producto;

  //Funcion para seleccionar el producto
  seleccionar(nombre:string){
    this.productoSeleccionado=nombre;
  }

  //Funcion para buscar productos
  busqueda(event:Event){
    //Extraer el valor del input
    const valorBuscar = (event.target as HTMLInputElement).value;

    //Cambiar el subtitulo
    this.subtitulo=`Resultado para: ${valorBuscar}`;

    //Filtrar el arreglo original de servicios
    this.productosFiltrados=this.producto.filter(p =>
      p.nombre.toLowerCase().includes(valorBuscar.toLowerCase())
    )
  }

}
