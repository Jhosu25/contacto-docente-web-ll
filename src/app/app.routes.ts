import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Productos } from './shared/productos/productos';
import { Pag404 } from './shared/pag-404/pag-404';
import { Consultas } from './features/consultas/consultas';
import { Articulos } from './shared/articulos/articulos';

export const routes: Routes = [
    //Ruta Inicial
    {path:'', component:Home},
    //Rutas de navegación
    {path:'productos', component:Productos},
    {path:'consultas', component:Consultas},
    {path:'tendencias', component:Articulos},

    //Redireccion por si el usuario intenta acceder a una ruta que no existe
    {path:'**', component:Pag404}
];
