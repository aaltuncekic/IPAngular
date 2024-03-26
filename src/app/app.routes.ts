import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VerilerComponent } from './veriler/veriler.component';

export const routes: Routes = [
    {
        path:'',
        component:AppComponent
    },
    {
        path:'veriler',
        component:VerilerComponent
    }
];
