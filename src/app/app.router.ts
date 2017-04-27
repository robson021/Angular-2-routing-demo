import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {ModuleWithProviders} from '@angular/core';
import {MainComponent} from './main/main.component';

export const router: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
