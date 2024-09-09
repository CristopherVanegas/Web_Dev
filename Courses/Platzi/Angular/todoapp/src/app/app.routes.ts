// aqui se importan las paginas que se dividen o se crean como componentes
import { Routes } from '@angular/router';
import { HomeComponent } from './../app/pages/home/home.component';
import { LabsComponent } from './../app/pages/labs/labs.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'labs',
        component: LabsComponent
    }
];
