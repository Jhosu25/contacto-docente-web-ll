import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acerca',
  imports: [CommonModule],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {

  equipo = [
    {
      nombre: "María González",
      cargo: "CEO & Fundadora",
      descripcion: "Experta en tecnología wearable con más de 10 años de experiencia",
      imagen: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      nombre: "Carlos Ramírez",
      cargo: "Director de Tecnología",
      descripcion: "Ingeniero especializado en dispositivos inteligentes y IoT",
      imagen: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      nombre: "Ana Torres",
      cargo: "Gerente de Experiencia",
      descripcion: "Apasionada por crear experiencias excepcionales para nuestros clientes",
      imagen: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  estadisticas = [
    { numero: "50K+", texto: "Clientes Satisfechos" },
    { numero: "15+", texto: "Marcas Disponibles" },
    { numero: "98%", texto: "Satisfacción del Cliente" },
    { numero: "5 años", texto: "En el Mercado" }
  ];

  valores = [
    {
      icono: "🎯",
      titulo: "Calidad Garantizada",
      descripcion: "Trabajamos solo con las mejores marcas del mercado para asegurar productos de alta calidad."
    },
    {
      icono: "💎",
      titulo: "Precios Competitivos",
      descripcion: "Ofrecemos los mejores precios sin comprometer la calidad de nuestros productos."
    },
    {
      icono: "🚀",
      titulo: "Envío Rápido",
      descripcion: "Entrega en 24-48 horas en todo el país con seguimiento en tiempo real."
    },
    {
      icono: "🛡️",
      titulo: "Garantía Extendida",
      descripcion: "Todos nuestros productos incluyen garantía oficial de la marca más garantía extendida."
    }
  ];

}