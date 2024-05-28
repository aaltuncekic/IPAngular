import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VerilerComponent } from './veriler/veriler.component';
import { ParametreComponent } from './parametre/parametre.component';
import { UniversitiesComponent } from './universities/universities.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'',
        component:AppComponent
    },
    {
        path:'veriler',
        component:VerilerComponent
    },
    {
        path:'parametre/:id/:pa',
        component:ParametreComponent
    },
    {
        path:'universiteler',
        component:UniversitiesComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
];
