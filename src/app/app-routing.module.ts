import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [

  { path: 'header', component: HeaderComponent },
  { path: 'hero', component: HeroComponent },
  { path: '', redirectTo: '/header', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
