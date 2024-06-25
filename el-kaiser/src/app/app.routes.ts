import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailsComponent } from './pages/details/details.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'details/:id', component: DetailsComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
