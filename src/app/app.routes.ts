import { Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'forms',
        component: FormsComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
        data: { title: 'Home' },
    },
];
