import { Component, OnInit, signal } from '@angular/core';
import { Home } from "./features/home/home";
import { Navbar } from "./shared/navbar/navbar";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [ Home, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void { 
    initFlowbite();
}
}