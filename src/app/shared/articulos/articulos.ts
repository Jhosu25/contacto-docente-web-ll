import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-articulos',
  imports: [CommonModule, FormsModule],
  templateUrl: './articulos.html',
  styleUrl: './articulos.css',
})
export class Articulos {

  filtro:string=''

  articulos = [
    {
      nombre: "Apple Watch Series 11", 
      especie: "Premium", 
      demanda: "alta", 
      vendidos: 92,
      imagen: "https://www.apple.com/la/apple-watch-series-11/images/overview/health/health_sleep_score__d4pcoy8v0cwi_large.jpg"
    },
    {
      nombre: "Samsung Galaxy Watch 8", 
      especie: "Gama Alta", 
      demanda: "alta", 
      vendidos: 78,
      imagen: "https://image-us.samsung.com/us/watches/galaxy-watch8/images/galaxy-watch8-kv.jpg?imbypass=true"
    },
    {
      nombre: "Google Pixel Watch 3", 
      especie: "Deportivo", 
      demanda: "media", 
      vendidos: 65,
      imagen: "https://static2.pisapapeles.net/uploads/2024/09/Google-Pixel-Watch-3.jpg"
    },
    {
      nombre: "Garmin Venu 3", 
      especie: "Deportivo", 
      demanda: "alta", 
      vendidos: 88,
      imagen: "https://res.garmin.com/en/products/010-02784-00/g/58837-M-VID.jpg"
    },
    {
      nombre: "OnePlus Watch 3", 
      especie: "Premium", 
      demanda: "media", 
      vendidos: 55,
      imagen: "https://image01.oneplus.net/media/202502/12/b3c115c086af4684e803827886a183bb.png"
    },
    {
      nombre: "Xiaomi Watch S3", 
      especie: "Económico", 
      demanda: "alta", 
      vendidos: 82,
      imagen: "https://i.blogs.es/a66dbe/watch-s3-00/840_560.jpeg"
    },
    {
      nombre: "Huawei Watch GT 4", 
      especie: "Gama Alta", 
      demanda: "media", 
      vendidos: 58,
      imagen: "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt4/watch-gt4-g/images/new/sec1/huawei-watch-gt4.jpg"
    },
    {
      nombre: "Amazfit GTR 4", 
      especie: "Deportivo", 
      demanda: "alta", 
      vendidos: 75,
      imagen: "https://www.maxmovil.com/media/wysiwyg/Fichas-de-producto/Noviembre-2023/Amazfit_GTR4_0001_Amazfit-GTR-4-TECNOLOCURA-1.jpg"
    },
    {
      nombre: "Fitbit Sense 2", 
      especie: "Salud", 
      demanda: "baja", 
      vendidos: 42,
      imagen: "https://m.media-amazon.com/images/I/61Q79ulDs6L.jpg"
    }
  ]

}