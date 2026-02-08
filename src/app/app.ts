import { Component, OnInit, signal } from '@angular/core';
import { Home } from "./features/home/home";
import { Navbar } from "./shared/navbar/navbar";
import { initFlowbite } from 'flowbite';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [ Home, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void { 
    initFlowbite();
}
}